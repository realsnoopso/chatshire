import getStyleRoot, { promptStyle } from './generateStyle';
import { Tag, Button, TextArea, PromptBox, TextInput, Loading } from '@common';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { copyToClipboard } from '@utils';

function LoadingIndicator() {
  return <Loading>Generating SQL...</Loading>;
}

type FlipsideResponse = {
  response: any;
};

const generateEtherscanLink = (value: string) => {
  const isTransactionHash = /^0x([A-Fa-f0-9]{64})$/.test(value);
  const isBlockNumber = /^(?:0[xX])?[A-Fa-f0-9]+$/.test(value);
  if (isTransactionHash) {
    return `https://etherscan.io/tx/${value}`;
  } else if (isBlockNumber) {
    return `https://etherscan.io/block/${parseInt(value, 16)}`;
  } else {
    return undefined;
  }
};

export default function Generate() {
  const styleRoot = getStyleRoot();
  const router = useRouter();
  const queryTitle = router.query.info;

  const [isPromptBoxHidden, setIsPromptBoxHidden] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isResultLoading, setResultLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [sqlQuery, setSqlQuery] = useState('');
  const [queryResult, setQueryResult] = useState<FlipsideResponse>();

  function handlePromptBox() {
    setIsPromptBoxHidden(!isPromptBoxHidden);
  }

  async function createGPTGeneratedSQLQuery() {
    setLoading(true);
    const requestBody = {
      userMessage: queryTitle,
    };

    const response = await fetch('/api/ethereum/core.transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();

    setSqlQuery(responseData.sqlStatement);

    setLoading(false);
  }

  const [ethAddress, setEthAddress] = useState<string|null>(null);
  

  async function getGPTGeneratedSQLQuery() {
    setShowResult(true);
    setResultLoading(true);
    const requestBody = {
      query: sqlQuery,
    };

    const response = await fetch('/api/flipside/call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();

    setQueryResult(responseData);
    setResultLoading(false);
    console.log(`queryResult: ${queryResult?.response}`)
    
  }

  useEffect(()=> {
    if (queryResult) {
      console.log({queryResult});
      const ethAddress = generateEtherscanLink(queryResult?.response)
      console.log(`ethAddress: ${ethAddress}`)
      ethAddress && setEthAddress(ethAddress)
    }
  },[queryResult])

  useEffect(() => {
    createGPTGeneratedSQLQuery();
  }, []);

  const [resultBtnText, setResultBtnText] = useState('copy');

  return (
    <div className={styleRoot}>
      <section className="prompt">
        <div className="header">
          <div className="tag-container">
            <Tag>Ethereum</Tag>
            <Tag>transaction</Tag>
          </div>
          <h2 className="title">{queryTitle}</h2>
        </div>
        <PromptBox isHidden={isPromptBoxHidden} style={promptStyle}></PromptBox>
        <div className="button-container">
          {isPromptBoxHidden ? (
            <Button icon="chevron_down" _onClick={handlePromptBox} size="small">
              Show Edit
            </Button>
          ) : (
            <Button icon="chevron_up" _onClick={handlePromptBox} size="small">
              Hide Edit
            </Button>
          )}
        </div>
      </section>

      <>
        {isLoading ? (
          <>
            <Loading>Generating SQL...</Loading>
          </>
        ) : (
          <>
            <section>
              <h3 className="section-title">Query</h3>
              <TextArea
                btn="Show me a result"
                _onClick={getGPTGeneratedSQLQuery}
                value={sqlQuery !== '' ? sqlQuery : 'Enter a query'}
                style={{ height: '10em' }}
              ></TextArea>
            </section>
          </>
        )}
      </>
      {showResult ? (
        <>
          {isResultLoading ? (
            <>
              <Loading>Generating Result...</Loading>
            </>
          ) : (
            <>
              <section className='result'>
                <h3 className="section-title">Result</h3>
                <TextInput
                  btn={resultBtnText}
                  _onClick={() => {
                    if (queryResult) copyToClipboard(queryResult.response);
                    setResultBtnText('copied!');
                    setTimeout(() => {
                      setResultBtnText('copy');
                    }, 1000);
                  }}
                  placeholder="Transaction hash"
                  defaultValue={queryResult?.response??''}
                  isReadOnly
                ></TextInput>
                {queryResult && ethAddress ? (
                  <div className='eth-address'>
                    <Button size="small">
                      <a href={ethAddress??''} target="_blank" rel="noreferrer">
                        View on Etherscan
                      </a>
                    </Button>
                  </div>
                ) : <></>}
              </section>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

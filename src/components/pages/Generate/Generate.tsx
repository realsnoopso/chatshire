import getStyleRoot, { promptStyle } from './generateStyle';
import { Tag, Button, TextArea, PromptBox, TextInput } from '@common';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { call } from '@apis/index';

function LoadingIndicator() {
  return <div>Loading...</div>;
}

type FlipsideResponse = {
  response: any;
};

export default function Generate() {
  const styleRoot = getStyleRoot();
  const router = useRouter();
  const queryTitle = router.query.info;

  const [isPromptBoxHidden, setIsPromptBoxHidden] = useState(true);
  const [isLoading, setLoading] = useState(false);
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
    console.log(responseData);
    setSqlQuery(responseData.sqlStatement);

    setLoading(false);
  }

  async function getGPTGeneratedSQLQuery() {
    setLoading(true);
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
    console.log(responseData);
    setQueryResult(responseData);
    setLoading(false);
  }

  useEffect(() => {
    createGPTGeneratedSQLQuery();
  }, []);

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

      <section>
        <h3 className="section-title">Query</h3>
        <TextArea
          btn="Show me a result"
          _onClick={getGPTGeneratedSQLQuery}
          placeholder={sqlQuery !== '' ? sqlQuery : 'Enter a query'}
          style={sqlQuery !== '' ? { fontWeight: 'bold' } : undefined}
        ></TextArea>
        {isLoading ? <LoadingIndicator /> : null}
      </section>
      <section>
        <h3 className="section-title">Result</h3>
        <TextInput
          btn="Copy"
          _onClick={() => {}}
          placeholder="Transaction hash"
          defaultValue="NOT YET SUBMITTED"
          isReadOnly
        ></TextInput>
      </section>
      {queryResult ? <div>queryResult: {queryResult.response}</div> : null}
    </div>
  );
}

import getStyleRoot, { promptStyle } from './generateStyle';
import { Tag, Button, TextArea, PromptBox, TextInput } from '@common';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Generate() {
  const styleRoot = getStyleRoot();
  const router = useRouter();

  // Access the "info" value from the router's query object
  const queryTitle = router.query.info;

  const [isPromptBoxHidden, setIsPromptBoxHidden] = useState(true);

  function handlePromptBox() {
    setIsPromptBoxHidden(!isPromptBoxHidden);
  }

  return (
    <div className={styleRoot}>
      <section className="prompt">
        <div className="header">
          <div className="tag-container">
            <Tag>Ethereum</Tag>
            <Tag>transaction</Tag>
          </div>
          <h2 className="title">
            {queryTitle}
          </h2>
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
          _onClick={() => {}}
          placeholder="Enter a query"
        ></TextArea>
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
    </div>
  );
}
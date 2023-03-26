import getStyleRoot, { promptStyle } from './generateStyle';
import { Tag, Button, TextArea, PromptBox, TextInput } from '@common';
import { useState } from 'react';

export default function Generate() {
  const styleRoot = getStyleRoot();

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
            <Tag>Maker DAO</Tag>
          </div>
          <h2 className="title">
            Give me the transaction hash with the largest amount
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
          btn="Generate"
          placeholder="Enter a query"
          _onClick={() => {}}
        ></TextArea>
      </section>
      <section>
        <h3 className="section-title">Result</h3>
        <TextInput
          btn="Generate"
          placeholder="Enter a query"
          _onClick={() => {}}
        ></TextInput>
      </section>
    </div>
  );
}

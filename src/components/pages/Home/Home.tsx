import { TextArea, SelectBox, Card } from '@components/index';
import getStyleRoot from './homeStyle';

import * as historyModule from '@mocks/history.json';
import * as promptExampleModule from '@mocks/promptExample.json';
import * as Types from '@src/types/index';

export default function Home() {
  const styleRoot = getStyleRoot();
  const history: Types.History[] = JSON.parse(
    JSON.stringify(historyModule)
  ).data;
  const promptExample: Types.PromptExample[] = JSON.parse(
    JSON.stringify(promptExampleModule)
  ).data;

  return (
    <>
      <div className={styleRoot}>
        <section className="form">
          <SelectBox
            options={['test', 'test2', 'test2', 'test2', 'test2']}
            defaultOption="Select Chain"
          ></SelectBox>
          <SelectBox
            options={['test', 'test2', 'test2', 'test2', 'test2']}
            defaultOption="Select Item"
          ></SelectBox>
          <TextArea
            btn="Generate"
            placeholder="Cast your spell 🪄"
            _onClick={() => {}}
          ></TextArea>
        </section>
        <section>
          <h3 className="section-title">History</h3>
          <div className="card-container">
            {history.map((v, i) => {
              return (
                <Card
                  key={i}
                  firstTag={v.chain}
                  secondTag={v.item}
                  icon="copy"
                  _onClick={() => {}}
                >
                  {v.prompt}
                </Card>
              );
            })}
          </div>
        </section>
        <section>
          <h3 className="section-title">Prompt Example</h3>
          <div className="card-container">
            {promptExample.map((v, i) => {
              return (
                <Card key={i} icon="copy" _onClick={() => {}}>
                  {v}
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

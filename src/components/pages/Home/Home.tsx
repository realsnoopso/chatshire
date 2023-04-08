import { TextArea, SelectBox, Card, PromptBox } from '@components/index';
import getStyleRoot from './homeStyle';

import * as historyModule from '@mocks/history.json';
import * as promptExampleModule from '@mocks/promptExample.json';
import * as Types from '@src/types/index';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
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
        <PromptBox></PromptBox>

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

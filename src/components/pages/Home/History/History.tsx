import { TextArea, SelectBox, Card, PromptBox } from '@components/index';

import * as historyModule from '@mocks/history.json';
import * as Types from '@src/types/index';

export default function Home() {
  const history: Types.History[] = JSON.parse(
    JSON.stringify(historyModule)
  ).data;

  return (
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
  );
}

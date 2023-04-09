import { TextArea, SelectBox, Card, PromptBox } from '@components/index';
import getStyleRoot from './homeStyle';
import { copyToClipboard } from '@utils';
import { forwardRef, useEffect, useState } from 'react';

import * as historyModule from '@mocks/history.json';
import * as promptExampleModule from '@mocks/promptExample.json';
import * as Types from '@src/types/index';
import { useRouter } from 'next/router';
import History from './History/History';
import { getLocalStorage } from '@utils';

export default function Home() {
  const router = useRouter();
  const styleRoot = getStyleRoot();
  const promptExample: Types.PromptExample[] = JSON.parse(
    JSON.stringify(promptExampleModule)
  ).data;

  const [isLoading, setLoading] = useState(true);
  const [history, setHistroy] = useState<any[] | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [copiedChain, setCopiedChain] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!e) return;
    const prompt = e.currentTarget.querySelector('p')?.innerText;
    const chain = e.currentTarget.querySelector('span.firstTag')?.innerHTML;
    const item = e.currentTarget.querySelector('span.secondTag')?.innerHTML;

    if (chain && item) {
      setCopiedChain(chain);
      setCopiedItem(item);
    }

    if (prompt) {
      setCopiedPrompt(prompt);
      copyToClipboard(prompt);
    }
  };

  useEffect(() => {
    setLoading(false);

    const historyStr: any = getLocalStorage('history');
    const history = JSON.parse(historyStr);
    setHistroy(history?.slice(history.length - 3, history.length).reverse());
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <>
      <div className={styleRoot}>
        <PromptBox
          copiedPrompt={copiedPrompt}
          copiedChain={copiedChain}
          copiedItem={copiedItem}
        ></PromptBox>

        <section>
          <h3 className="section-title">Prompt Example</h3>
          <div className="card-container">
            {promptExample.map((v, i) => {
              return (
                <Card key={i} icon="copy" _onClick={handleClick}>
                  {v}
                </Card>
              );
            })}
          </div>
        </section>
        {history ? (
          <section>
            <h3 className="section-title">History</h3>
            <div className="card-container">
              {history?.map((v: any, i: number) => (
                <Card
                  key={i}
                  firstTag={v.chain}
                  secondTag={v.item}
                  icon="copy"
                  _onClick={handleClick}
                >
                  {v.prompt}
                </Card>
              ))}
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

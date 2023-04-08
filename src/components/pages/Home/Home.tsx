import { TextArea, SelectBox, Card, PromptBox } from '@components/index';
import getStyleRoot from './homeStyle';
import { copyToClipboard } from '@utils';
import { forwardRef, useEffect, useState } from 'react';

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

  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!e) return;
    const prompt = e.currentTarget.querySelector('p')?.innerText;
    if (prompt) {
      setCopiedPrompt(prompt);
      copyToClipboard(prompt);
    }
  };

  return (
    <>
      <div className={styleRoot}>
        <PromptBox copiedPrompt={copiedPrompt}></PromptBox>

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
      </div>
    </>
  );
}

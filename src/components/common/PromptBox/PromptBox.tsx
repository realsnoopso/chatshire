import { forwardRef, useEffect } from 'react';
import { styleRoot } from './PromptBoxStyle';
import { Icon, SelectBox, TextArea } from '@common';
import { useRouter } from 'next/router';

interface PromptBox {
  style?: React.CSSProperties;
  _onClick?: () => void;
  isHidden?: boolean;
}

const PromptBox = forwardRef((props: PromptBox, ref: any) => {
  const { _onClick, isHidden, style } = props;
  const router = useRouter();

  return (
    <>
      <section
        className={styleRoot + (isHidden ? ' hide' : '')}
        style={style ?? undefined}
      >
        <SelectBox
          index={1}
          options={['test', 'test2', 'test2', 'test2', 'test2']}
          defaultOption="Select Chain"
          defaultImg="defaultEmptyImg"
        ></SelectBox>
        <SelectBox
          index={2}
          options={['test', 'test2', 'test2', 'test2', 'test2']}
          defaultOption="Select Item"
          defaultImg="secondEmptyImg"
        ></SelectBox>
        <TextArea
          btn="Generate"
          placeholder="Cast your spell 🪄"
          _onClick={() => {
            router.push('/generate');
          }}
        ></TextArea>
      </section>
    </>
  );
});

export default PromptBox;

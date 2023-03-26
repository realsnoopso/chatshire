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

  useEffect(() => {
    console.log(isHidden);
  }, [isHidden]);

  return (
    <>
      <section
        className={styleRoot + (isHidden ? ' hide' : '')}
        style={style ?? undefined}
      >
        <SelectBox
          options={['test', 'test2', 'test2', 'test2', 'test2']}
          defaultOption="Select Chain"
          defaultIcon="emptyImg1"
        ></SelectBox>
        <SelectBox
          options={['test', 'test2', 'test2', 'test2', 'test2']}
          defaultOption="Select Item"
          defaultIcon="emptyImg2"
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

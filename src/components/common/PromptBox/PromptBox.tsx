import { forwardRef, useState } from 'react';
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

  // Declare a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Update the input value when the user types in the textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <section
        className={styleRoot + (isHidden ? ' hide' : '')}
        style={style ?? undefined}
      >
        <SelectBox
          index={1}
          options={['Ethereum']}
          defaultOption="Select Chain"
          defaultImg="defaultEmptyImg"
        ></SelectBox>
        <SelectBox
          index={2}
          options={['Transactions']}
          defaultOption="Select Item"
          defaultImg="secondEmptyImg"
        ></SelectBox>
        <TextArea
          btn="Generate"
          placeholder="Cast your spell 🪄"
          value={inputValue}
          onChange={handleInputChange}
          _onClick={() => {
            router.push({
              pathname: '/generate',
              query: { info: inputValue },
            });
          }}
        ></TextArea>
      </section>
    </>
  );
});

export default PromptBox;

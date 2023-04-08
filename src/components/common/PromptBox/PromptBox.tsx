import { forwardRef, useEffect, useState } from 'react';
import { styleRoot } from './PromptBoxStyle';
import { Icon, SelectBox, TextArea } from '@common';
import { useRouter } from 'next/router';

interface PromptBox {
  style?: React.CSSProperties;
  _onClick?: React.MouseEventHandler<any>;
  isHidden?: boolean;
  copiedPrompt?: string | null;
}

const PromptBox = forwardRef((props: PromptBox, ref: any) => {
  const { _onClick, isHidden, style, copiedPrompt } = props;
  const router = useRouter();

  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  // Declare a state variable to store the input value
  const [inputValue, setInputValue] = useState<string | null>(null);

  useEffect(() => {
    copiedPrompt && setInputValue(copiedPrompt);
  }, [copiedPrompt]);

  // Update the input value when the user types in the textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = () => {
    if (!selectedChain || !selectedItem || !inputValue) {
      return alert('Please fill out all required fields.');
    }
    router.push({
      pathname: '/generate',
      query: { info: inputValue },
    });
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
          selectedData={selectedChain}
          _onChange={setSelectedChain}
        ></SelectBox>
        <SelectBox
          index={2}
          options={['Transactions']}
          defaultOption="Select Item"
          defaultImg="secondEmptyImg"
          selectedData={selectedItem}
          _onChange={setSelectedItem}
        ></SelectBox>
        <TextArea
          btn="Generate"
          placeholder="Cast your spell 🪄"
          value={inputValue}
          onChange={handleInputChange}
          _onClick={handleClick}
        ></TextArea>
      </section>
    </>
  );
});

export default PromptBox;

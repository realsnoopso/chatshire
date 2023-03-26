import { useState, forwardRef } from 'react';
import { styleRoot } from './TextInputStyle';
import { Button, Icon } from '@common';

interface TextInput {
  placeholder: string;
  btn: string;
  _onClick: () => void;
}

const TextInput = forwardRef((props: TextInput, ref: any) => {
  const { placeholder, btn, _onClick } = props;
  const [value, setValue] = useState('');

  function handleKeyDown(e: any) {
    if (e.key === 'Enter') {
      return _onClick();
    }
    setValue(e.currentTarget.value);
  }

  return (
    <div className={styleRoot}>
      <input
        type="text"
        placeholder={placeholder}
        className={styleRoot}
        onKeyDown={handleKeyDown}
      />
      <Button size="small" _onClick={_onClick}>
        {btn}
      </Button>
    </div>
  );
});

export default TextInput;

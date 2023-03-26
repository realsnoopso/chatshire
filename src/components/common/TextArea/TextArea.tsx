import { useState, forwardRef } from 'react';
import { styleRoot } from './TextAreaStyle';
import { Button, Icon } from '@components/index';

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
      <textarea
        placeholder={placeholder}
        className={styleRoot}
        onKeyDown={handleKeyDown}
      />
      <Button size="large" _onClick={_onClick}>
        {btn}
      </Button>
    </div>
  );
});

export default TextInput;

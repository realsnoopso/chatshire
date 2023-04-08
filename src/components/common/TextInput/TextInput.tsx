import { useState, forwardRef } from 'react';
import { styleRoot } from './TextInputStyle';
import { Button } from '@common';

interface TextInput {
  placeholder: string;
  btn: string;
  _onClick: () => void;
  defaultValue?: string;
  isReadOnly?: boolean;
  style?: React.CSSProperties;
}

const TextInput = forwardRef((props: TextInput, ref: any) => {
  const { placeholder, btn, _onClick, isReadOnly, defaultValue, style } = props;
  const [value, setValue] = useState('');

  function handleKeyDown(e: any) {
    if (e.key === 'Enter') {
    }
    setValue(e.currentTarget.value);
  }

  return (
    <div className={styleRoot} style={style}>
      <input
        type="text"
        placeholder={placeholder}
        className={styleRoot}
        onKeyDown={handleKeyDown}
        readOnly={isReadOnly}
        value={defaultValue ?? value}
      />
      <Button size="small" _onClick={_onClick}>
        {btn}
      </Button>
    </div>
  );
});

export default TextInput;

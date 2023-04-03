import { useState, forwardRef } from 'react';
import { styleRoot } from './TextAreaStyle';
import Button from '../Button/Button';

interface TextArea {
  btn?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  _onClick?: () => void;
}

const TextArea = forwardRef((props: TextArea, ref: any) => {
  const { placeholder, btn, _onClick, value, onChange } = props;
  const [internalValue, setInternalValue] = useState(value || '');

  function handleInput(e: any) {
    const newValue = e.currentTarget.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={styleRoot}>
      <textarea
        placeholder={placeholder}
        className={styleRoot}
        value={internalValue}
        onInput={handleInput}
      />
      <Button size="large" _onClick={_onClick}>
        {btn}
      </Button>
    </div>
  );
});

export default TextArea;
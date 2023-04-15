import { useState, forwardRef, useEffect } from 'react';
import { styleRoot } from './TextAreaStyle';
import { Button } from '@common';

interface TextAreaProps {
  btn?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  _onClick?: React.MouseEventHandler<any>;
  style?: React.CSSProperties;
  height?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { placeholder, btn, _onClick, value, onChange, style, height } =
      props;
    const [internalValue, setInternalValue] = useState<
      string | null | undefined
    >(value || '');

    useEffect(() => {
      setInternalValue(value);
    }, [value]);

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
          value={internalValue ?? ''}
          onInput={handleInput}
          style={style}
          ref={ref}
          spellCheck={false}
        />
        <Button size="large" _onClick={_onClick}>
          {btn}
        </Button>
      </div>
    );
  }
);

export default TextArea;

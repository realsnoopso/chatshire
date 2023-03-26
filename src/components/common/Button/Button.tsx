import React from 'react';
import { styleRoot } from './ButtonStyle';

interface Button {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: () => void;
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: boolean;
}

const Button = React.forwardRef((props: Button, ref: any) => {
  const { children, _onClick, size, loading, icon, style } = props;

  return (
    <button
      ref={ref}
      className={
        styleRoot +
        ` ${style} ${size} ${loading ? 'loading' : ''} ${icon ? 'icon' : ''}`
      }
      onClick={_onClick}
    >
      {icon}
      {children}
    </button>
  );
});

export default Button;

import React from 'react';
import { styleRoot } from './ButtonStyle';
import { Icon } from '@common';
import { IconType } from '@types';

interface Button {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: () => void;
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: IconType;
  color?: string;
}

const Button = React.forwardRef((props: Button, ref: any) => {
  const { children, _onClick, size, loading, icon, style, color } = props;

  const colorStyle = color ? { color: color } : {};

  return (
    <button
      ref={ref}
      className={
        styleRoot +
        ` ${style} ${size} ${loading ? 'loading' : ''} ${icon ? 'icon' : ''}`
      }
      style={colorStyle}
      onClick={_onClick}
    >
      {icon && <Icon name={icon} fill={color}></Icon>}
      {children}
    </button>
  );
});

export default Button;

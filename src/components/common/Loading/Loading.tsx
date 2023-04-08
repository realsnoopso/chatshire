import React from 'react';
import { IconType } from '@types';
import { styleRoot } from './LoadingStyle';

interface Loading {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: React.MouseEventHandler<any>;
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: IconType;
  color?: string;
  noAmimation?: boolean;
}

const Loading = React.forwardRef((props: Loading, ref: any) => {
  const { children, color } = props;

  const colorStyle = color ? { color: color } : {};

  return (
    <div className={styleRoot}>
      <div className="loadingIcon">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p>{children}</p>
    </div>
  );
});

export default Loading;

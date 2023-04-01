import React from 'react';
import { styleRoot } from './CardStyle';
import { Icon } from '@common';
import { IconType } from '@types';

interface Card {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: () => void;
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: IconType;
  firstTag?: string;
  secondTag?: string;
}

const Card = React.forwardRef((props: Card, ref: any) => {
  const { children, _onClick, icon, firstTag, secondTag } = props;

  return (
    <>
      <div ref={ref} className={styleRoot}>
        {firstTag && secondTag && (
          <div className="tag-container">
            {firstTag && <span className="firstTag">{firstTag}</span>}
            {secondTag && <span className="secondTag">{secondTag}</span>}
          </div>
        )}

        <p className="content">{children}</p>
        <div className="icon-btn-container">
          {icon && <Icon name={icon} _onClick={_onClick}></Icon>}
        </div>
      </div>
    </>
  );
});

export default Card;

import React, { MouseEventHandler } from 'react';
import { styleRoot } from './CardStyle';
import { Icon } from '@common';
import { IconType } from '@types';

interface Card {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: React.MouseEventHandler<HTMLDivElement>;
  size?: 'large' | 'small';
  loading?: boolean;
  icon?: IconType;
  firstTag?: string;
  secondTag?: string;
}

const Card = React.forwardRef((props: Card, ref: any) => {
  const { children, _onClick, icon, firstTag, secondTag } = props;

  const contents =
    String(children).length > 60 && firstTag && secondTag && children
      ? String(children).substring(0, 60) + '...'
      : children;

  return (
    <>
      <div ref={ref} className={styleRoot + ' card'} onClick={_onClick}>
        {firstTag && secondTag && (
          <div className="tag-container">
            {firstTag && <span className="firstTag">{firstTag}</span>}
            {secondTag && <span className="secondTag">{secondTag}</span>}
          </div>
        )}

        <p
          className={'content' + (firstTag && secondTag ? ' with-tagbox' : '')}
        >
          {children}
        </p>
        <div className="icon-btn-container">
          {icon && <Icon name={icon}></Icon>}
        </div>
      </div>
    </>
  );
});

export default Card;

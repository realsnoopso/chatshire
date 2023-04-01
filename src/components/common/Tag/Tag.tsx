import React from 'react';
import { styleRoot } from './TagStyle';
import { Icon } from '@common';
import { IconType } from '@types';

interface Tag {
  children: React.ReactNode;
  icon?: IconType;
}

const Tag = React.forwardRef((props: Tag, ref: any) => {
  const { children, icon } = props;

  return (
    <div ref={ref} className={styleRoot}>
      {icon && <Icon name={icon}></Icon>}
      {children}
    </div>
  );
});

export default Tag;

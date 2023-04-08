import React from 'react';
import { styleRoot } from './ModalStyle';
import { Icon } from '@common';
import { IconType } from '@types';

interface Modal {
  children: React.ReactNode;
  style?: React.CSSProperties;
  _onClick?: React.MouseEventHandler<any>;
  title: string;
  content: string;
}

const Modal = React.forwardRef((props: Modal, ref: any) => {
  const { children, _onClick, title = '', content = '' } = props;

  return (
    <>
      <div className="modal">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="backdrop"></div>
    </>
  );
});

export default Modal;

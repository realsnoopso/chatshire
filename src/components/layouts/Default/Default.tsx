import React, { useEffect } from 'react';
import { styleRoot } from './defaultStyle';
import { Gnb } from '@/components/common';
import { connectWallet } from '@services/connectWallet';

interface Deafult {
  children: React.ReactNode;
  hasBackBtn?: boolean;
}

const Default = React.forwardRef((props: Deafult, ref: any) => {
  const { children, hasBackBtn } = props;

  return (
    <>
      <Gnb hasBackBtn={hasBackBtn} _onClick={connectWallet}></Gnb>
      <div className={styleRoot}>{children}</div>
    </>
  );
});

export default Default;

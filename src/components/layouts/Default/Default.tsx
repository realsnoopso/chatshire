import React from 'react';
import { styleRoot } from './defaultStyle';
import { Gnb } from '@/components/common';
import { ConnectWallet } from '@services/connectWallet';

interface Deafult {
  children: React.ReactNode;
  hasBackBtn?: boolean;
}

const Default = React.forwardRef((props: Deafult, ref: any) => {
  const { children, hasBackBtn } = props;

  return (
    <>
      <Gnb hasBackBtn={hasBackBtn} _onClick={ConnectWallet}></Gnb>
      <div className={styleRoot}>{children}</div>
    </>
  );
});

export default Default;

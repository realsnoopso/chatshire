import React from 'react';
import { styleRoot } from './defaultStyle';
import { Gnb } from '@/components/common';
import { ConnectWallet } from '@services/connectWallet';

interface Deafult {
  children: React.ReactNode;
}

const Default = React.forwardRef((props: Deafult, ref: any) => {
  const { children } = props;

  return (
    <>
      <Gnb _onClick={ConnectWallet}></Gnb>
      <div className={styleRoot}>{children}</div>
    </>
  );
});

export default Default;

import React, { useEffect } from 'react';
import { styleRoot } from './defaultStyle';
import { Gnb } from '@/components/common';
import { connectWallet } from '@services/connectWallet';

interface Deafult {
  children: React.ReactNode;
}

const Default = React.forwardRef((props: Deafult, ref: any) => {
  const { children } = props;

  return (
    <>
      <div className={styleRoot}>{children}</div>
    </>
  );
});

export default Default;

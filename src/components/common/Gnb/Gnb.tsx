import React, { useEffect, useState } from 'react';
import { Button, Icon } from '@common';
import { styleRoot } from './GnbStyle';
import { useRouter } from 'next/router';
import { connectWallet } from '@services/connectWallet';

interface Gnb {
  _onClick: () => void;
  hasBackBtn?: boolean;
}

const Gnb = React.forwardRef((props: Gnb) => {
  const { _onClick, hasBackBtn } = props;
  const router = useRouter();
  const [account, setAccount] = useState('');
  const slice = (str: String) => str.slice(0, 5) + '...' + account.slice(-5);

  async function handleClick() {
    const address = await connectWallet();
    setAccount(address);
  }

  function clickLogo() {
    router.push('/');
  }

  function goBack() {
    router.back();
  }

  return (
    <div className={styleRoot}>
      {hasBackBtn ? (
        <Button size="small" _onClick={goBack}>
          <Icon name="arrow_left" fill="var(--gray-500)" size={28}></Icon>
        </Button>
      ) : (
        <Button size="small" _onClick={clickLogo} noAmimation>
          <Icon name="logo"></Icon>
        </Button>
      )}

      {account !== '' ? (
        <Button>{slice(account)}</Button>
      ) : (
        <Button _onClick={handleClick}>Connect Wallet</Button>
      )}
    </div>
  );
});

export default Gnb;

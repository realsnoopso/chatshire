import React, { useState } from 'react';
import { Button, Icon } from '@common';
import { styleRoot } from './GnbStyle';
import { useRouter } from 'next/router';
import { ConnectWallet } from '@services/connectWallet';

interface Gnb {
  _onClick: () => void;
}

const Gnb = React.forwardRef((props: Gnb) => {
  const { _onClick } = props;
  const router = useRouter();
  const [account, setAccount] = useState('');

  async function handleClick() {
    const address = await ConnectWallet();
    setAccount(address);
  }

  function clickLogo() {
    router.push('/');
  }

  return (
    <div className={styleRoot}>
      <Icon name="logo" _onClick={clickLogo}></Icon>
      {account !== '' ? (
        <div style={{ color: 'white' }}>{account}</div>
      ) : (
        <Button _onClick={handleClick}>Connect Wallet</Button>
      )}
    </div>
  );
});

export default Gnb;

import React, { useState } from 'react';
import { Button, Icon } from '@common';
import { styleRoot } from './GnbStyle';
import { useRouter } from 'next/router';
import { ConnectWallet } from '@services/connectWallet';

interface Gnb {
  _onClick: () => void;
  hasBackBtn?: boolean;
}

const Gnb = React.forwardRef((props: Gnb) => {
  const { _onClick, hasBackBtn } = props;
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
      {hasBackBtn ? (
        <Icon
          name="arrow_left"
          fill="var(--gray-500)"
          size={28}
          _onClick={clickLogo}
        ></Icon>
      ) : (
        <Icon name="logo" _onClick={clickLogo}></Icon>
      )}

      {account !== '' ? (
        <div style={{ color: 'white' }}>{account}</div>
      ) : (
        <Button _onClick={handleClick}>Connect Wallet</Button>
      )}
    </div>
  );
});

export default Gnb;

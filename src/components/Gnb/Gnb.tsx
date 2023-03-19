import React from 'react';
import { Button, Icon } from '@components/index';
import { styleRoot } from './GnbStyle';
import { useRouter } from 'next/router';

interface Gnb {}

const Gnb = React.forwardRef((props: Gnb) => {
  const {} = props;
  const router = useRouter();

  function clickLogo() {
    router.push('/');
  }

  return (
    <div className={styleRoot}>
      <Icon name="logo" _onClick={clickLogo}></Icon>
      <Button _onClick={clickLogo}>Connect Wallet</Button>
    </div>
  );
});

export default Gnb;

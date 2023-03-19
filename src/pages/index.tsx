import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  Button,
  Icon,
  Gnb,
  TextArea,
  SelectBox,
  Card,
} from '@components/index';
import { getStyleRoot } from './indexStyle';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const styleRoot = getStyleRoot();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gnb></Gnb>
      <main className={styleRoot}>
        <Button size="large">Generate</Button>
        <Button size="large" loading>
          Loading...
        </Button>
        <Button>Connect Wallet</Button>
        <Button size="small">Show Edit</Button>
        <Button size="small">Hide Edit</Button>
        <Icon name="copy" size={56}></Icon>
        <Icon name="chevron_down" size={56}></Icon>
        <Icon name="chevron_up" size={56}></Icon>
        <SelectBox
          options={[
            'test',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
            'test2',
          ]}
          defaultOption="Select Chain"
        ></SelectBox>
        <TextArea
          btn="Generate"
          placeholder="Cast your spell 🪄"
          _onClick={() => {}}
        ></TextArea>
        <div className="card-container">
          <Card
            firstTag="Ethereum"
            secondTag="Maker DAO"
            icon="copy"
            _onClick={() => {}}
          >
            Give me the transaction hash with the largest amountGive me the
            transaction hash with the largest amount
          </Card>
          <Card icon="copy">dasfsdafd</Card>
          <Card icon="copy">dasfsdafd</Card>
        </div>
      </main>
    </>
  );
}

import type { NextPage } from 'next';
import { Default } from '@layouts';
import { Generate } from '@pages';

const GeneratePage: NextPage = () => {
  return (
    <Default hasBackBtn={true}>
      <Generate />
    </Default>
  );
};

export default GeneratePage;

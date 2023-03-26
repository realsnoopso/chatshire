import type { NextPage } from 'next';
import { Default } from '@layouts/index';
import { Generate } from '@pages/index';

const GeneratePage: NextPage = () => {
  return (
    <Default>
      <Generate />
    </Default>
  );
};

export default GeneratePage;

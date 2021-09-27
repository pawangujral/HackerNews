import * as React from 'react';
import { LoaderBlock } from './loader.style';
import LoaderImg from '_/assets/images/loader.svg';

const Loader: React.FC = (): JSX.Element => {
  return (
    <LoaderBlock>
      <img src={LoaderImg} alt="Please wait..." />
    </LoaderBlock>
  );
};

export default Loader;

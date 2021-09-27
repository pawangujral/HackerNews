import * as React from 'react';
import LoaderImg from '_/assets/images/loader.svg';
import { LoaderBlock } from './loader.style';

const Loader: React.FC = (): JSX.Element => (
  <LoaderBlock>
    <img src={LoaderImg} alt="Please wait..." />
  </LoaderBlock>
);

export default Loader;

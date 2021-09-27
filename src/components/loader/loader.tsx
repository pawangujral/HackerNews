import * as React from 'react';
import { LoaderBlock, Animation } from './loader.style';

const Loader: React.FC = (): JSX.Element => (
  <LoaderBlock>
    <Animation />
  </LoaderBlock>
);

export default Loader;

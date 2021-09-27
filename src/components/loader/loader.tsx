import * as React from 'react';
import { LoaderBlock, Animation } from './loader.style';

const LoaderComponent: React.FC = (): JSX.Element => (
  <LoaderBlock>
    <Animation />
  </LoaderBlock>
);

export default LoaderComponent;

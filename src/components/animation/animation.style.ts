import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const breatheAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
`;

export const LoaderBlock = styled.div`
  color: var(--loader-color);
  font-size: 100px;
  margin-top: 30px;
  text-align: center;
`;

export const IconBlock = styled(FiLoader)`
  animation: ${breatheAnimation} 2s infinite linear;
`;

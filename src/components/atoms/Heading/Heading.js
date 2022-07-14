import React from 'react';
import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};

  ${({ smallHead }) =>
    smallHead &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: ${({ theme }) => theme.regular};
    `};
`;

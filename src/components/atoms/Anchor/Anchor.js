import React from 'react';
import styled from 'styled-components';

export const Anchor = styled.a`
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  :hover {
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    color: ${({ theme }) => theme.black};
  }
`;

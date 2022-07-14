import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ListItem = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.45, 0.01, 0.24, 1);
`;

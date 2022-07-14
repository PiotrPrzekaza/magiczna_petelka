import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  padding: 15px;
  text-transform: lowercase;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.45, 0.01, 0.24, 1);
  transition-delay: 0s;
  text-align: center;
  color: ${({ theme }) => theme.grey};
`;

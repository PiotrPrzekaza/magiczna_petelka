import React from 'react';
import styled from 'styled-components';

import { NavItem } from 'components/atoms/NavItem/NavItem';
import logo from 'assets/icon/Magiczna.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 250px 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  margin: 0 auto;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 10px;
  list-style: none;
  height: 100px;
  width: 100%;
  justify-content: end;
  align-items: center;
`;

const StyledImageItem = styled.img`
  position: absolute;
  top: -20px;
  left: 0;
  width: 250px;
  height: 250px;
  overflow: visible;
`;

const StyledNavItem = styled(NavItem)`
  padding: 1.5rem 2.6rem;
  border-radius: 0;
  margin-top: 2rem;
  text-decoration: none;
  position: relative;
  &.active {
    color: ${({ theme }) => theme.grey1};
    &:before,
    &:after {
      transform: translateX(0) translateY(0);
      background-color: ${({ theme }) => theme.primary};
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.grey1};
    transition: 0.5s;
  }
  &:before {
    transform: translateX(-0.4rem) translateY(0.4rem);
  }
  &:after {
    transform: translateX(0.4rem) translateY(-0.4rem);
  }

  &:hover {
    color: ${({ theme }) => theme.grey1};
    &:before,
    &:after {
      transform: translateX(0) translateY(0);
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const MenuBar = () => (
  <Wrapper>
    <NavItem exact to="/" activeClassName="active">
      <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
    </NavItem>
    <StyledMenu>
      <li>
        <StyledNavItem to="/category" activeClassName="active">
          Kategorie
        </StyledNavItem>
      </li>
      <li>
        <StyledNavItem to="/contact" activeClassName="active">
          Kontakt
        </StyledNavItem>
      </li>
      <li>
        <StyledNavItem to="/about" activeClassName="active">
          O Mnie
        </StyledNavItem>
      </li>
    </StyledMenu>
  </Wrapper>
);

import React from 'react';
import styled, { css } from 'styled-components';
import searchIcon from 'assets/icon/searchIcon.svg';

export const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 30px;

  ::placeholder {
    text-transform: lowercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ submit }) =>
    submit &&
    css`
      background-color: ${({ theme }) => theme.white};
      border-radius: 0;
    `}

  ${({ search }) =>
    search &&
    css`
      margin: 5px 0;
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background: ${({ theme }) => theme.grey100} 15px 50% / 15px no-repeat url(${searchIcon});
    `}
`;

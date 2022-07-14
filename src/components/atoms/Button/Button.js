import shopIcon from 'assets/icon/addCard.svg';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  color: white;
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  width: 33%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  ${({ submit }) =>
    submit &&
    css`
      width: 40%;
      margin: 50px auto 0;
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 1px;
      color: ${({ theme }) => theme.white};
      transition: all 0.5s cubic-bezier(0.45, 0.01, 0.24, 1);
      :hover {
        transform: scale(1.2);
        background-color: ${({ theme }) => theme.grey400};
        color: ${({ theme }) => theme.black};
      }
    `}

  ${({ shop }) =>
    shop &&
    css`
      background: ${({ theme }) => theme.grey100} 85% 50% / 18px no-repeat url(${shopIcon});
    `}
`;

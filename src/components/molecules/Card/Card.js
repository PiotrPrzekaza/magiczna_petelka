import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 5px 15px 0 hsla(0, 2%, 49%, 0.14);
  position: relative;
  display: grid;
  transition: all 0.5s cubic-bezier(0.45, 0.01, 0.24, 1);
  :hover {
    transform: scale(1.1);
    box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  }
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  width: 40%;
  text-align: left;
  margin-top: 10px;
  padding: 10px 10px 10px 20px;
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  transition: all 0.3s cubic-bezier(0.45, 0.01, 0.24, 1);
  :hover {
    border: 1px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledImage = styled.img`
  position: relative;
  padding: 10px;
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;

const StyledHeading = styled(Heading)`
  padding: 10px 0;
  text-align: center;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const InnerWrapper = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
  width: 90%;
  margin: 0 auto;

  ${({ flex }) =>
    flex &&
    css`
      border-bottom: none;
      display: flex;
      margin-bottom: 20px;
      flex-direction: column;
    `};
`;

export const Card = ({ typeOfCard, id, title, price, desc, imageUrl, type, createdTime }) => (
  <>
    <Wrapper typeOfCard={typeOfCard}>
      <InnerWrapper>
        <StyledImage src={imageUrl} alt="" />
      </InnerWrapper>
      <InnerWrapper flex>
        <StyledHeading>{title}</StyledHeading>
        <StyledParagraph>Cena: {price}</StyledParagraph>
        <StyledParagraph>{desc}</StyledParagraph>
        <StyledParagraph> {type}</StyledParagraph>
        <StyledParagraph>Czas realizacji: {createdTime}</StyledParagraph>
        <StyledButton shop>Zamów </StyledButton>
      </InnerWrapper>
    </Wrapper>
  </>
);

Card.propTypes = {
  typeOfCard: PropTypes.oneOf(['torebki', 'ubrania', 'kocyki', 'pluszaki', 'chusty']),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  type: PropTypes.oneOf(['Szydełko', 'Druty']).isRequired,
  createdTime: PropTypes.string,
  id: PropTypes.number,
};

Card.defaultProps = {
  typeOfCard: 'torebki',
  imageUrl: null,
  id: null,
  createdTime: null,
};

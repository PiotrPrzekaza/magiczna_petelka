import React from 'react';
import styled, { keyframes } from 'styled-components';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const appear = keyframes`
0% {
  opacity: 0;
 transform: translateX(-22vw);
}
100% {
  opacity: 1;
  transform: translateX(0vw);
}
`;

const sized = keyframes`
0%{
  transform: scale(1);
}

100%{
transform: scale(1.2);
}
`;

const StyledWrapper = styled.div`
  position: relative;
  left: -5vw;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    center center / cover no-repeat url(${hero});
`;

const HeroButton = styled(Button)`
  border-radius: 5px;
  width: 20%;
  margin-top: 10px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.grey1};
  transition: all 0.4s ease;
  :hover {
    transform: scale(1.3);
    border: 1px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 50%;
  margin-bottom: 2em;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  margin: 30vh;
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.regular};
  &:before {
    content: '';
    animation-name: ${appear};
    animation-duration: 2s;
    animation-delay: 1s;
    position: absolute;
    animation-fill-mode: both;
    left: -22vw;
    top: -18vh;
    width: 50vw;
    height: 50vh;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Hero = () => (
  <>
    <StyledWrapper>
      <StyledHeading as="h1">Szydełko to sposób na życie!</StyledHeading>
      <StyledParagraph>Szukasz czegoś zrobionego od serca? Zapraszam!!!</StyledParagraph>
      <HeroButton as={Link} to="/category">
        Zobacz Moje projekty
      </HeroButton>
    </StyledWrapper>
  </>
);

import React from 'react';
import styled from 'styled-components';
import FacebookIcon from 'assets/icon/facebook.svg';
import InstagramIcon from 'assets/icon/instagram.svg';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Anchor } from 'components/atoms/Anchor/Anchor';
import logo from 'assets/icon/Magiczna.png';

const FooterWrapper = styled.footer`
  position: relative;
  margin-top: 5vh;
  height: 10vh;
  display: flex;
  min-width: 90vw;
  border-top: 1px solid ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.gray};
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primaryBg};
`;

const StyledImageItem = styled.img`
  width: 25px;
  height: 25px;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.1);
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
const CreatorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 20px;
`;

export const Footer = () => (
  <FooterWrapper>
    <SocialWrapper>
      <StyledParagraph>sociale</StyledParagraph>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Magiczna_petelka-100294938418180/"
      >
        <StyledImageItem src={FacebookIcon} />
      </Anchor>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/magiczna_petelka/"
      >
        <StyledImageItem src={InstagramIcon} />
      </Anchor>
    </SocialWrapper>
    <CreatorWrapper>
      <StyledParagraph>
        powered by{' '}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-przekaza-9540b8172/"
        >
          {' '}
          Piotr Przekaza
        </Anchor>
        &copy; {new Date().getFullYear()}
      </StyledParagraph>
    </CreatorWrapper>
  </FooterWrapper>
);

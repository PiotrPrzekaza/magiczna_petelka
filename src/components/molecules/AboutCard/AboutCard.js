import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  min-height: 60vh;
  max-width: 50vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.article`
  display: flex;
  width: 80%;
  height: 100%;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.grey1};
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey1};
`;

export const AboutCard = ({ typeOfCard }) => (
  <>
    <StyledWrapper typeOfCard={typeOfCard}>
      <StyledHeading>O Mnie</StyledHeading>
      <InnerWrapper>
        <StyledParagraph>
          Szydełko to maja pasja. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          facere fuga harum minus? Eum vel, autem aliquam temporibus, eius natus in voluptas
          provident laudantium placeat rem sunt quam nostrum at? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo facere fuga harum minus? Eum vel, autem aliquam
          temporibus, eius natus in voluptas provident laudantium placeat rem sunt quam nostrum at?
        </StyledParagraph>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

AboutCard.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};

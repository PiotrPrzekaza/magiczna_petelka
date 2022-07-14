import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Form } from 'components/molecules/Form/Form';

const StyledWrapper = styled.div`
  min-width: 50vw;
  min-height: 60vh;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.thirdColorBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  display: flex;
  color: ${({ theme }) => theme.grey1};
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 5%;
`;

export const ContactForm = ({ typeOfCard }) => (
  <StyledWrapper typeOfCard={typeOfCard}>
    <StyledHeader>
      <StyledHeading>Wypełnij i prześlij do mnie</StyledHeading>
    </StyledHeader>
    <Form />
  </StyledWrapper>
);

ContactForm.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};

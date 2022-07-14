import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Textarea } from 'components/atoms/Textarea/Textarea';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const StyledInput = styled(Input)`
  margin: 30px 0;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0;
`;

export const Form = () => (
  <StyledForm>
    <Input submit type="text" name="name" placeholder="imię" />
    <StyledInput type="email" name="email" placeholder="email@simple.com" />
    <Textarea type="text" name="message" placeholder="wiadomość" />
    <Button submit>Wyślij</Button>
  </StyledForm>
);

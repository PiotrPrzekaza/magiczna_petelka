import React from 'react';
import styled from 'styled-components';

export const Textarea = styled.textarea`
  outline: none;
  resize: none;
  overflow: auto;
  border: none;
  height: 100%;
  ::placeholder {
    padding: 2px;
    text-align: center;
    text-transform: lowercase;
    color: ${({ theme }) => theme.grey300};
  }
`;

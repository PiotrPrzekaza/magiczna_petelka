import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuBar } from 'components/organisms/MenuBar/MenuBar';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Input } from 'components/atoms/Input/Input';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  padding: 10px 30px 20px 30px;
  margin: 30px auto 50px auto;
`;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledHeader = styled.div`
  margin: 50px 0 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  width: 30%;
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  padding: 0 0 5px 10px;
  color: ${({ theme }) => theme.grey1};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  padding: 0 0 5px 10px;
  color: ${({ theme }) => theme.grey1};
`;

export const PageTemplate = ({ children, pageType, id }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <StyledHeading as="h1">{pageType}</StyledHeading>
        <Input search placeholder="Szukaj" />
        <StyledParagraph> 6 produktów</StyledParagraph>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

PageTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['torebki', 'kocyki', 'pluszaki', 'chusty', 'ubrania']),
  id: PropTypes.number,
};

PageTemplate.defaultProps = {
  pageType: 'torebki',
  id: null,
};

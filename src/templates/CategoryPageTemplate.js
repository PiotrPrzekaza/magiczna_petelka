import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuBar } from 'components/organisms/MenuBar/MenuBar';
import { Heading } from 'components/atoms/Heading/Heading';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin: 50px auto;
  min-height: 100%;
`;

const StyledGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 20px;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledHeader = styled.div`
  position: relative;
  margin: 50px 0 50px 0;
  padding-bottom: 20px;
  width: 30%;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  padding-left: 20px;
  color: ${({ theme }) => theme.grey1};
`;

export const CategoryPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledHeader>
        <StyledHeading as="h1">kategorie</StyledHeading>
      </StyledHeader>
      <StyledGrid>{children}</StyledGrid>
    </Wrapper>
    <Footer />
  </>
);

CategoryPageTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['category', 'torebki', 'kocyki', 'pluszaki', 'chusty', 'ubrania'])
    .isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuBar } from 'components/organisms/MenuBar/MenuBar';
import { Footer } from 'components/organisms/Footer/Footer';

const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3%;
`;

export const AboutPageTemplate = ({ children, pageType }) => (
  <>
    <MenuBar />
    <Wrapper pageType={pageType}>
      <StyledGrid>{children}</StyledGrid>
      <Footer />
    </Wrapper>
  </>
);

AboutPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['about', 'contact']),
};

AboutPageTemplate.defaultProps = {
  pageType: 'about',
};

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import { ListItem } from 'components/atoms/ListItem/ListItem';

const Wrapper = styled.div`
  min-height: 300px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 5px 15px 0 hsla(0, 2%, 49%, 0.14);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15vh;
  transition: all 0.4s cubic-bezier(0.45, 0.01, 0.24, 1);
  :hover {
    transform: scale(1.1);
    transform-origin: 50% 50%;
    box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  }
`;

const HeaderWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  width: 90%;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  align-items: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  margin-top: 20px;
  width: 150px;
  height: 150px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-left: 20px;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CategoryCard = ({ typeOfCard, category, imageUrl, id }) => (
  <>
    <Wrapper typeOfCard={typeOfCard} category={category}>
      <StyledListItem as={Link} to={`category/${category}`}>
        <HeaderWrapper>
          <StyledHeading>{category}</StyledHeading>
        </HeaderWrapper>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="" />
        </InnerWrapper>
      </StyledListItem>
    </Wrapper>
  </>
);

CategoryCard.propTypes = {
  typeOfCard: PropTypes.oneOf(['category']).isRequired,
  imageUrl: PropTypes.string,
  category: PropTypes.oneOf(['torebki', 'ubrania', 'pluszaki', 'chusty', 'kocyki']).isRequired,
  id: PropTypes.number,
};

CategoryCard.defaultProps = {
  imageUrl: null,
  id: null,
};

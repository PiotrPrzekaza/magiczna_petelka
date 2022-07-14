import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

const Clothes = ({ ubrania }) => (
  <PageTemplate pageType="ubrania">
    {ubrania.map(({ title, price, desc, type, imageUrl, createdTime, id }) => (
      <Card
        typeOfCard="ubrania"
        title={title}
        price={price}
        desc={desc}
        type={type}
        imageUrl={imageUrl}
        createdTime={createdTime}
        key={id}
      />
    ))}
  </PageTemplate>
);
Clothes.propTypes = {
  ubrania: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['Szydełko', 'Druty']).isRequired,
      imageUrl: PropTypes.string.isRequired,
      createdTime: PropTypes.string.isRequired,
    }),
  ),
};

Clothes.defaultProps = {
  ubrania: [],
};

const mapStateToProps = (state) => {
  const { ubrania } = state;
  return state;
};

export default connect(mapStateToProps)(Clothes);

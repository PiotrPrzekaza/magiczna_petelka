import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

const Mascots = ({ pluszaki }) => (
  <PageTemplate pageType="pluszaki">
    {pluszaki.map(({ title, price, desc, type, imageUrl, createdTime, id }) => (
      <Card
        typeOfCard="pluszaki"
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

Mascots.propTypes = {
  pluszaki: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      createdTime: PropTypes.string.isRequired,
    }),
  ),
};

Mascots.defaultProps = {
  pluszaki: [],
};

const mapStateToProps = (state) => {
  const { pluszaki } = state;
  return state;
};

export default connect(mapStateToProps)(Mascots);

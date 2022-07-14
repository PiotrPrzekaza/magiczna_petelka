import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

const Bags = ({ torebki }) => (
  <PageTemplate pageType="torebki">
    {torebki.map(({ title, price, desc, type, imageUrl, createdTime, id }) => (
      <Card
        typeOfCard="torebki"
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

Bags.propTypes = {
  torebki: PropTypes.arrayOf(
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

Bags.defaultProps = {
  torebki: [],
};

const mapStateToProps = (state) => {
  const { torebki } = state;
  return state;
};

export default connect(mapStateToProps)(Bags);

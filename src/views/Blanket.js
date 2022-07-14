import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

const Blanket = ({ kocyki }) => (
  <PageTemplate pageType="kocyki">
    {kocyki.map(({ title, price, desc, type, imageUrl, createdTime, id }) => (
      <Card
        typeOfCard="kocyki"
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

Blanket.propTypes = {
  kocyki: PropTypes.arrayOf(
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

Blanket.defaultProps = {
  kocyki: [],
};

const mapStateToProps = (state) => {
  const { kocyki } = state;
  return state;
};

export default connect(mapStateToProps)(Blanket);

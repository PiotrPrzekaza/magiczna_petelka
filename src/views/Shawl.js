import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

const Shawl = ({ chusty }) => (
  <PageTemplate pageType="chusty">
    {chusty.map(({ title, price, desc, type, imageUrl, createdTime, id }) => (
      <Card
        typeOfCard="chusty"
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
Shawl.propTypes = {
  chusty: PropTypes.arrayOf(
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

Shawl.defaultProps = {
  chusty: [],
};

const mapStateToProps = (state) => {
  const { chusty } = state;
  return state;
};

export default connect(mapStateToProps)(Shawl);

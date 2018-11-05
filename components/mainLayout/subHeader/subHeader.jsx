import PropTypes from 'prop-types';
import './subHeader.scss';

const SubHeader = ({ title }) => (
  <div className="subHeader">
    <h2 className="subHeaderTitle">
      {title}
    </h2>
  </div>
);

SubHeader.propTypes = {
  title: PropTypes.string,
};

SubHeader.defaultProps = {
  title: '',
};

export default SubHeader;

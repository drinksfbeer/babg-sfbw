import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './hamburgerButton.scss';

const HamburgerButton = ({ onClick }) => (
  <div onClick={onClick} className="hamburgerButton">
    {/* <FontAwesomeIcon icon="bars" size="lg" /> */}

    {onClick ?
      <FontAwesomeIcon icon="bars" size="lg" /> : <FontAwesomeIcon icon="times" size="lg" />
    }

  </div>
);

HamburgerButton.propTypes = {
  onClick: PropTypes.func,
};

HamburgerButton.defaultProps = {
  onClick: null,
};

export default HamburgerButton;

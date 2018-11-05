import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({
  icon,
  iconTheme,
  iconSize,
  classContainer,
}) => (
  <FontAwesomeIcon icon={[iconTheme, icon]} size={iconSize} className={`${classContainer}`} />
);


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  iconTheme: PropTypes.string,
  iconSize: PropTypes.string,
  classContainer: PropTypes.string,
};

Icon.defaultProps = {
  iconTheme: 'fas',
  iconSize: '1x',
  classContainer: '',
};

export default Icon;

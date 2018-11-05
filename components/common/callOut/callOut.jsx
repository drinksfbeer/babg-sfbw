import PropTypes from 'prop-types';
import Button from '../button/button';
import Icon from '../icon/icon';
import './callOut.scss';

const CallOut = ({
  title, subTitle, buttonContent, buttonHref, buttonClassContainer, icon,
}) => (
  <div
    className="callOut"
  >
    <Icon icon={icon} />
    <h3 className="callOutTitle twoX">{title}</h3>
    <h5>{subTitle}</h5>
    { buttonContent && buttonHref &&
      <Button content={buttonContent} buttonHref={buttonHref} classContainer={buttonClassContainer} />
    }
  </div>
);

CallOut.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonContent: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonClassContainer: PropTypes.string,
};

CallOut.defaultProps = {
  icon: '',
  title: '',
  subTitle: '',
  buttonContent: '',
  buttonHref: '',
  buttonClassContainer: '',
};

export default CallOut;

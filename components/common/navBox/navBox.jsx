import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button/button';
import './navBox.scss';

const NavBox = ({
  link, backgroundImage, icon, title, callToAction, classContainer,
}) => (
  <Link
    href={link}
  >
    <div
      className={`navBox ${classContainer}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="content">
        <span className="navBoxIcon"><FontAwesomeIcon icon={icon} /></span>
        <h3 className="navBoxTitle">{title}</h3>
        <Button content={callToAction} buttonHref={link} classContainer=" outlined white" />
      </div>
    </div>
  </Link>
);

NavBox.propTypes = {
  link: PropTypes.string,
  backgroundImage: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  callToAction: PropTypes.string,
  classContainer: PropTypes.string,
};

NavBox.defaultProps = {
  link: '',
  backgroundImage: '',
  icon: '',
  title: '',
  callToAction: '',
  classContainer: '',
};

export default NavBox;

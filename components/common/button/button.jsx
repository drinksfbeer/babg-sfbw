import './button.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({
  content, buttonHref, classContainer, icon,
}) => (
  <>
    {
      buttonHref.match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/gi) ? (
        <a
          className={`anchorButton ${classContainer}`}
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="button">
            {
              icon && <span className="buttonIcon"><FontAwesomeIcon icon={icon} /></span>
            }
            {content}
          </div>
        </a>
      ) : (
        <Link href={buttonHref}>
          <button type="button" className={`linkButton button ${classContainer}`}>
            {
              icon && <span className="buttonIcon"><FontAwesomeIcon icon={icon} /></span>
            }
            <span>
              {content}
            </span>
          </button>
        </Link>
      )}
    </>
);

Button.propTypes = {
  content: PropTypes.string,
  buttonHref: PropTypes.string,
  classContainer: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  content: '',
  buttonHref: '',
  classContainer: '',
  icon: null,
};

export default Button;

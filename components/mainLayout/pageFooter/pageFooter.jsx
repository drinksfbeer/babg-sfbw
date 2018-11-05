import Link from 'next/link';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './pageFooter.scss';

const PageFooter = ({ footerLinks }) => (
  <div className="pageFooter">
    <nav className="pageFooterLinkList">
      <ul className="horizontal">
        <Link href="/sponsors">
          <li
            className={classNames({
              linkItem: true,
              pageFooterLinkItem: true,
            })}
          >
            Sponsors
          </li>
        </Link>
        {
          footerLinks.length !== 0 &&
          footerLinks.map((link, i) => (
            <Link key={`${link.title}${i + 1}`} as={link.href} href="/pageBuilderContainer">
              <li
                className={classNames({
                  linkItem: true,
                  pageFooterLinkItem: true,
                })}
              >
                {link.title}
              </li>
            </Link>
          ))
        }
      </ul>
    </nav>
  </div>
);

PageFooter.propTypes = {
  footerLinks: PropTypes.arrayOf(PropTypes.shape({})),
};

PageFooter.defaultProps = {
  footerLinks: [],
};

export default PageFooter;

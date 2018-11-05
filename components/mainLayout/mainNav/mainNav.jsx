import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Notifications from 'react-notification-system-redux';
import classNames from 'classnames';
import HamburgerButton from '../../common/hamburgerButton';
import SocialLinks from '../../common/socialLinks';
import SFBWMobileLogo from '../../common/logos/SFBWMobile';
import Actions from '../../../redux/actions';
import './mainNav.scss';

class MainNav extends React.Component {
  state = {
    active: true,
  };

  changeActive() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    const { active } = this.state;
    const {
      router,
      mainNavLinks,
      authorized,
      asyncAction,
      error,
    } = this.props;
    const routerArray = router.asPath.split('/');

    return (
      <div
        className={classNames({
          mainNav: true,
          hideMainNav: active,
        })}
      >

        <div className="mobile-nav">
          <div className="inside">

            <Link href="/">
              <div className="linkItem">
                <SFBWMobileLogo />
              </div>
            </Link>

            <HamburgerButton
              light
              onClick={
                () => {
                  this.changeActive();
                }
              }
            />
          </div>
        </div>

        <nav
          className={classNames({
            mainNavList: true,
            // hideMainNav: active,
          })}
        >
          <ul className="mainNavMenu horizontal">
            <Link href="/sponsors">
              <li
                className={classNames({
                  linkItem: true,
                  mainNavItem: true,
                  hideMainNav: active,
                  mainNavActive: routerArray[1].toLowerCase() === 'sponsors',
                })}
              >
                Sponsors
              </li>
            </Link>
            { mainNavLinks.length !== 0 &&
              mainNavLinks.map((link, i) => (
                <Link key={`${link.title}${i + 1}`} as={link.href} href="/pageBuilderContainer">
                  <li
                    className={classNames({
                      linkItem: true,
                      mainNavItem: true,
                      hideMainNav: active,
                      mainNavActive: routerArray[1].toLowerCase() === link.title.toLowerCase(),
                    })}
                  >
                    {link.title}
                  </li>
                </Link>
              ))
            }
            {
              !authorized &&
              <>
                <Link href="/login">
                  <li
                    className={classNames({
                      linkItem: true,
                      mainNavItem: true,
                      hideMainNav: active,
                      mainNavActive: routerArray[1].toLowerCase() === 'login',
                    })}
                  >
                    Log In
                  </li>
                </Link>
                <Link href="/register">
                  <li
                    className={classNames({
                      linkItem: true,
                      mainNavItem: true,
                      hideMainNav: active,
                      mainNavActive: routerArray[1].toLowerCase() === 'register',
                    })}
                  >
                    Register
                  </li>
                </Link>
              </>
            }
            {
              authorized &&
              <>
                <li
                  className={classNames({
                    linkItem: true,
                    mainNavItem: true,
                    hideMainNav: active,
                  })}
                  onClick={() => asyncAction('logout', null, null, (err) => {
                    if (err) {
                      error({ title: 'An error occurred logging you out.' });
                    } else {
                      router.replace('/');
                    }
                  })}
                >
                  Logout
                </li>
              </>
            }
          </ul>
          <SocialLinks />
        </nav>
      </div>
    );
  }
}

MainNav.propTypes = {
  router: PropTypes.shape({}),
  mainNavLinks: PropTypes.arrayOf(PropTypes.shape({})),
  authorized: PropTypes.bool,
  asyncAction: PropTypes.func.isRequired,
  error: PropTypes.func,
};

MainNav.defaultProps = {
  router: {},
  mainNavLinks: [],
  authorized: false,
  error: () => {},
};

export default connect(
  state => ({
    authorized: state.users.auth.authorized,
  }),
  dispatch => ({
    asyncAction: bindActionCreators(Actions.asyncAction, dispatch),
    error: bindActionCreators(Notifications.error, dispatch),
  }),
  null,
  { pure: false },
)(withRouter(MainNav));

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import HamburgerButton from '../../common/hamburgerButton/hamburgerButton';
import './subNav.scss';

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };

    this.changeActive = this.changeActive.bind(this);
  }

  changeActive() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    const { mainPage, subPages, router } = this.props;
    const { active } = this.state;
    return (
      <nav className="subNav">
        <HamburgerButton
          onClick={
            () => {
              this.changeActive();
            }
          }
        />
        <ul className="horizontal">
          { subPages.length !== 0 &&
            subPages.map((subPage, i) => {
              let url = subPage;
              if (subPage.includes('&')) {
                url = subPage.replace('&', 'and');
              }
              return (
                <Link key={`${subPage}${i + 0}`} as={`/${mainPage.toLowerCase()}/${url.toLowerCase().split(' ').join('-')}`} href="/pageBuilderContainer">
                  {/* Tried using react class but the state was not being set corrective for active nav
                    Ended up using the router location to set active class
                  */}
                  <li
                    className={classNames({
                      linkItem: true,
                      subNavItem: true,
                      hideSubNav: active,
                      subNavActive: router.asPath === `/${mainPage.toLowerCase()}/${url.toLowerCase().split(' ').join('-')}`,
                    })}
                  >
                    {subPage}
                  </li>
                </Link>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

SubNav.propTypes = {
  mainPage: PropTypes.string,
  subPages: PropTypes.arrayOf(PropTypes.string),
  router: PropTypes.shape({}),
};

SubNav.defaultProps = {
  mainPage: '',
  subPages: [],
  router: {},
};

export default withRouter(SubNav);

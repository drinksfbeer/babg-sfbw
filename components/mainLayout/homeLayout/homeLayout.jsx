import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader';
import MainNav from '../mainNav';
import HomeFooter from '../homeFooter';
import './homeLayout.scss';

const HomeLayout = ({ children, pages }) => {
  // Array to check if header item needs to be added
  const headerItems = [];
  // Object for Main Nav
  const mainNavLinks = [];
  // Check if headeritems needs nav and pushes to mainNav if needed
  pages.map((page) => {
    if (page.isASubPage && !page.hidden && !headerItems.includes(page.headerTitle)) {
      headerItems.push(page.headerTitle);
      mainNavLinks.push({
        href: `/${page.headerTitle.toLowerCase()}/${page.slug}`,
        title: page.headerTitle,
      });
    }
    return null;
  });
  return (
    <div className="layoutContainer">
      <div className="inner-wrapper">
        <MainHeader />
        <MainNav mainNavLinks={mainNavLinks} />
        <div id="homeBody">
          {children}
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]),
  pages: PropTypes.arrayOf(PropTypes.shape({})),
};

HomeLayout.defaultProps = {
  children: {},
  pages: [],
};

export default connect(
  state => ({
    pages: state.pages.list._list,
  }),
)(HomeLayout);

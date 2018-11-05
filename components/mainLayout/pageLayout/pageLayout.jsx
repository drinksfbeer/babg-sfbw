import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader';
import MainNav from '../mainNav/mainNav';
import PageFooter from '../pageFooter/pageFooter';
import './pageLayout.scss';

const PageLayout = ({ children, pages }) => {
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
        <div id="pageBody">
          {children}
        </div>
      </div>
      <PageFooter footerLinks={mainNavLinks} />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  pages: PropTypes.arrayOf(PropTypes.shape({})),
};

PageLayout.defaultProps = {
  children: {},
  pages: [],
};

export default connect(
  state => ({
    pages: state.pages.list._list,
  }),
)(PageLayout);

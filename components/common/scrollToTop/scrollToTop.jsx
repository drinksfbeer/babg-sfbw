import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import scrollIntoView from 'scroll-into-view';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { router } = this.props;
    if (router.asPath !== prevProps.router.asPath) {
      scrollIntoView(document.querySelector('.mainHeader'), { align: { top: 0 }, time: 1 });
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.shape({}),
  router: PropTypes.shape({}),
};

ScrollToTop.defaultProps = {
  children: null,
  router: null,
};

export default withRouter(ScrollToTop);

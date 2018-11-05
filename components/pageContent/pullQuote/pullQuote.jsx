import './pullQuote.scss';

import PropTypes from 'prop-types';
import React from 'react';

const PullQuote = ({ text }) => (
  <div className="pullQuote">
    <div className="pullQuoteText">
      {text}
    </div>
  </div>
);

PullQuote.propTypes = {
  text: PropTypes.string,
};

PullQuote.defaultProps = {
  text: '',
};

export default PullQuote;

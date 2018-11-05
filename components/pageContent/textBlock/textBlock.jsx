import './textBlock.scss';

import PropTypes from 'prop-types';
import React from 'react';

const TextBlock = ({ body, text }) => (
  <div className="textBlock">
    <div className="textBlockTitle">{text}</div>
    <p>{body}</p>
  </div>
);

TextBlock.propTypes = {
  body: PropTypes.string,
  text: PropTypes.string,
};

TextBlock.defaultProps = {
  body: '',
  text: '',
};

export default TextBlock;

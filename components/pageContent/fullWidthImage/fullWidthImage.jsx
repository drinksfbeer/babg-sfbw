import './fullWidthImage.scss';

import PropTypes from 'prop-types';
import React from 'react';

const FullWidthImage = ({ backgroundImageUrl, height }) => (
  <div
    className="fullWidthImage"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      height: `${height || 'auto'}`,
    }}
  />
);

FullWidthImage.propTypes = {
  backgroundImageUrl: PropTypes.string,
  height: PropTypes.string,
};

FullWidthImage.defaultProps = {
  backgroundImageUrl: '',
  height: '',
};

export default FullWidthImage;

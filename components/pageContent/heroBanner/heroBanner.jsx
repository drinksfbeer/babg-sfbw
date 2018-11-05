import './heroBanner.scss';

import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../common/button/button';

const HeroBanner = ({
  backgroundImage, subtitle, title, description, buttonTitle1, buttonLink1, buttonIcon1, buttonTitle2, buttonLink2, buttonIcon2, minHeight,
}) => (
  <div
    className="heroBanner"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      minHeight,
    }}
  >
    <div className="heroBannerTitle">{title}</div>
    <div className="heroBannerSubTitle">{subtitle}</div>
    <div className="heroBannerDescription">{description}</div>
    <div className="heroBannerButtonGroup">
      <Button content={buttonTitle1} buttonHref={buttonLink1} icon={buttonIcon1} classContainer="white" />
      <Button content={buttonTitle2} buttonHref={buttonLink2} icon={buttonIcon2} classContainer="white" />
    </div>
  </div>
);

HeroBanner.propTypes = {
  minHeight: PropTypes.string,
  backgroundImage: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle1: PropTypes.string,
  buttonLink1: PropTypes.string,
  buttonIcon1: PropTypes.string,
  buttonTitle2: PropTypes.string,
  buttonLink2: PropTypes.string,
  buttonIcon2: PropTypes.string,
};

HeroBanner.defaultProps = {
  minHeight: '40vh',
  backgroundImage: '',
  subtitle: '',
  title: '',
  description: '',
  buttonTitle1: '',
  buttonLink1: '',
  buttonIcon1: '',
  buttonTitle2: '',
  buttonLink2: '',
  buttonIcon2: '',
};

export default HeroBanner;

import './navBoxRow.scss';

import PropTypes from 'prop-types';
import React from 'react';

import NavBox from '../../common/navBox/navBox';

const NavBoxRow = ({
  link1, backgroundImage1, icon1, title1, callToAction1, link2, backgroundImage2, icon2, title2, callToAction2, link3, backgroundImage3, icon3, title3, callToAction3, toggle1, toggle2, toggle3,
}) => (
  <div className="navBoxRow">
    { !toggle1 && (
      <NavBox
        link={link1}
        backgroundImage={backgroundImage1}
        icon={icon1}
        title={title1}
        callToAction={callToAction1}
      />
    )}
    { !toggle2 && (
      <NavBox
        link={link2}
        backgroundImage={backgroundImage2}
        icon={icon2}
        title={title2}
        callToAction={callToAction2}
      />
    )}
    { !toggle3 && (
      <NavBox
        link={link3}
        backgroundImage={backgroundImage3}
        icon={icon3}
        title={title3}
        callToAction={callToAction3}
      />
    )}
  </div>
);

NavBoxRow.propTypes = {
  link1: PropTypes.string,
  backgroundImage1: PropTypes.string,
  icon1: PropTypes.string,
  title1: PropTypes.string,
  callToAction1: PropTypes.string,
  link2: PropTypes.string,
  backgroundImage2: PropTypes.string,
  icon2: PropTypes.string,
  title2: PropTypes.string,
  callToAction2: PropTypes.string,
  link3: PropTypes.string,
  backgroundImage3: PropTypes.string,
  icon3: PropTypes.string,
  title3: PropTypes.string,
  callToAction3: PropTypes.string,
  toggle1: PropTypes.bool,
  toggle2: PropTypes.bool,
  toggle3: PropTypes.bool,
};

NavBoxRow.defaultProps = {
  link1: '',
  backgroundImage1: '',
  icon1: '',
  title1: '',
  callToAction1: '',
  link2: '',
  backgroundImage2: '',
  icon2: '',
  title2: '',
  callToAction2: '',
  link3: '',
  backgroundImage3: '',
  icon3: '',
  title3: '',
  callToAction3: '',
  toggle1: false,
  toggle2: false,
  toggle3: false,
};

export default NavBoxRow;

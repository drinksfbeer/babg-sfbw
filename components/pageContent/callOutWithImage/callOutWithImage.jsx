import './callOutWithImage.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import CallOut from '../../common/callOut/callOut';

const CallOutWthImage = ({
  backgroundImage, title, bodyText, buttonText, buttonLink, positionSelect, icon,
}) => (
  <div
    className={classNames({
      fullWidthImage: true,
      callOutWithImage: true,
      callOutLeft: positionSelect === 'left',
      callOutRight: positionSelect === 'right',
      callOutCenter: positionSelect === 'center',
    })}
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    <CallOut icon={icon} title={title} subTitle={bodyText} buttonContent={buttonText} buttonHref={buttonLink} buttonClassContainer="outlined" />
  </div>
);

CallOutWthImage.propTypes = {
  icon: PropTypes.string,
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  bodyText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  positionSelect: PropTypes.string,
};

CallOutWthImage.defaultProps = {
  icon: '',
  backgroundImage: '',
  title: '',
  bodyText: '',
  buttonText: '',
  buttonLink: '',
  positionSelect: '',
};

export default CallOutWthImage;

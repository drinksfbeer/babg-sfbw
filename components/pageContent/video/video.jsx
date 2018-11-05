import './video.scss';

import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';

const Video = ({
  videoUrl,
  fullWidth,
  title,
  description,
  background,
}) => (
  <section className={classNames({
    videoSection: true,
    fullWidth,
    background,
  })}
  >
    <div className="container">
      <div className="grid">
        <div className="span centered size-10">
          <div className="player-wrapper">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </section>
);

Video.propTypes = {
  videoUrl: PropTypes.string,
  fullWidth: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.bool,
};

Video.defaultProps = {
  videoUrl: 'https://vimeo.com/273754283',
  fullWidth: false,
  title: '',
  description: '',
  background: false,
};

export default Video;

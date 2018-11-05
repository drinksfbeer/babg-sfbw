import './imageWithText.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Button from '../../common/button/button';
import Icon from '../../common/icon/icon';

const ImageWithText = ({
  image, preTitle, subtitle, title, content, buttonText, buttonLink, id, icon, flipped, stacked, hexCode,
}) => (
  <section
    className={classNames({
      textWithImage: true,
      flipped,
      stacked,
      hexCode,
    })}
    style={{
      backgroundColor: hexCode || '',
    }}
  >
    <div className="container">
      <div className="grid">
        <div className="span size-5">
          <a href={buttonLink}>
            <img src={image} alt="sideImage" className="slideImage" />
          </a>
        </div>
        <div className="span size-7 sideText">
          <Icon icon={icon} />
          <div id={id} className="preTitle">{preTitle}</div>
          <h2 className="title">{title}</h2>
          <div className="postTitle">{subtitle}</div>
          <p>{content}</p>
          { buttonText && buttonLink && !hexCode ?
            <Button content={buttonText} buttonHref={buttonLink} /> : <Button content={buttonText} buttonHref={buttonLink} classContainer="outlined white" />
          }
        </div>
      </div>
    </div>
  </section>

  // <div className="imageWithText">
  //   <div className="imageWithTextItem sideImage">
  //     <img src={image} alt="sideImage" />
  //   </div>
  //   <div className="imageWithTextItem sideText">
  //     <Icon icon={icon} />
  //     {
  //       preTitle && <div id={id} className="preTitle">{preTitle}</div>
  //     }
  //     <div className="title">{title}</div>
  //     <div className="subTitle">{subtitle}</div>
  //     <p>{content}</p>
  //     { buttonText && buttonLink &&
  //       <Button content={buttonText} buttonHref={buttonLink} />
  //     }
  //   </div>
  // </div>
);

ImageWithText.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  preTitle: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  flipped: PropTypes.bool,
  stacked: PropTypes.bool,
  hexCode: PropTypes.string,
};

ImageWithText.defaultProps = {
  image: '',
  subtitle: '',
  preTitle: '',
  title: '',
  content: '',
  buttonText: '',
  buttonLink: '',
  id: null,
  icon: '',
  flipped: false,
  stacked: false,
  hexCode: '',
};

export default ImageWithText;

import './sponsorListItem.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const SponsorListItem = ({
  imageUrl, alt, orange, blue, green, red, website, description,
}) => (
  <a
    className={classNames({
      sponsorListItem: true,
      orange,
      blue,
      green,
      red,
    })}
    href={website}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="item" src={imageUrl} alt={alt} />
    {
      description && <div className="sponsorDescription">{description}</div>
    }
  </a>
);

SponsorListItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  orange: PropTypes.bool,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  red: PropTypes.bool,
  website: PropTypes.string,
  description: PropTypes.string,
};

SponsorListItem.defaultProps = {
  imageUrl: '',
  alt: '',
  orange: false,
  blue: false,
  green: false,
  red: false,
  website: '',
  description: null,
};

export default SponsorListItem;

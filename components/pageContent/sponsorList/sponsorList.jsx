import './sponsorList.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import SponsorListItem from './listItem/sponsorListItem';

const SponsorList = ({
  sponsorHeader, orange, blue, green, red, sponsors, medium, small,
}) => (
  <div className="sponsorList">
    <div className="container">
      <div className="grid">
        <div className="item">
          <h3
            id={sponsorHeader}
            className={classNames({
              sponsorHeader: true,
              twoX: true,
              orange,
              blue,
              green,
              red,
            })}
          >
            {sponsorHeader}
          </h3>
        </div>
      </div>
      <div className="sponsorGrid grid">
        {
          sponsors.map((sponsor, i) => (
            <div
              key={`${i + 1}sponsor`}
              className={classNames({
                item: true,
                'size-4': medium,
                'size-3': small,
              })}
            >
              <SponsorListItem
                description={sponsor.description}
                website={sponsor.website}
                alt={sponsor.title}
                imageUrl={sponsor.imageUrl}
                orange={orange}
                blue={blue}
                green={green}
                red={red}
              />
            </div>

          ))
        }
      </div>
    </div>
  </div>
);

SponsorList.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape({})),
  sponsorHeader: PropTypes.string,
  orange: PropTypes.bool,
  blue: PropTypes.bool,
  green: PropTypes.bool,
  red: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
};

SponsorList.defaultProps = {
  sponsors: [],
  sponsorHeader: '',
  orange: false,
  blue: false,
  green: false,
  red: false,
  medium: false,
  small: false,
};

export default SponsorList;

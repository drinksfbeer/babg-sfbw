import './pageHeader.scss';

import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../../common/icon/icon';

const PageHeader = ({
  title, subTitle, backgroundImageUrl, icon,
}) => (
  <div
    className="pageHeader"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}
  >
    <Icon icon={icon} classContainer="pageHeaderIcon" />
    <div className="pageHeaderTitle">
      {title}
    </div>
    <div className="pageHeaderSubTitle">
      {subTitle}
    </div>
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  icon: PropTypes.string,
};

PageHeader.defaultProps = {
  title: '',
  subTitle: '',
  backgroundImageUrl: '',
  icon: '',
};

export default PageHeader;

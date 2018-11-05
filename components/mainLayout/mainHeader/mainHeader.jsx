import Link from 'next/link';
import React from 'react';

import SFBWLogo from '../../common/logos/SFBWLogo';
import SocialLinks from '../../common/socialLinks/socialLinks';
import './mainHeader.scss';

const Header = () => (
  <div className="mainHeader">
    <div className="mainHeaderItem leftMainHeader">
      <h3 className="description">The Bay Area Brewers Guild presents the 10th Annual</h3>
      <h3 className="title">San Francisco Beer Week</h3>
      <SocialLinks />
    </div>
    <div className="mainHeaderItem">
      <Link href="/">
        <div className="linkItem">
          <SFBWLogo />
        </div>
      </Link>
    </div>
    <div className="mainHeaderItem rightMainHeader">
      <div className="ribbon-wrapper">
        <span className="month">February</span>
        <div className="ribbon"><span className="date">1st - 10th</span></div>
        <span className="year">2019</span>
      </div>
    </div>
  </div>
);

export default Header;

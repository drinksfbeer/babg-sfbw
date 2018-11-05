import './homeFooter.scss';

import React from 'react';

import SFBGLogo from '../../common/logos/SFBGLogo';
import SocialLinks from '../../common/socialLinks/socialLinks';

const HomeFooter = () => (
  <div className="homeFooter">
    <h3 className="secondary-font">Join The Mailing List!</h3>
    <p>
      Enter your email to stay informed on the latest in SF Beer Week events,
      news, special releases, and more!
    </p>
    <input type="text" aria-label="Enter Email" />

    <SFBGLogo />
    <ul className="footerNav horizontal">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Sponsor</a>
      </li>
      <li>
        <a href="#">Gala</a>
      </li>
      <li>
        <a href="#">Info</a>
      </li>
    </ul>

    <SocialLinks />
  </div>
);

export default HomeFooter;

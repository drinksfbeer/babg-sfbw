
import React from 'react';

import Icon from '../icon/icon';

const SocialLinks = () => (

  <ul className="social-links horizontal">
    <li><a aria-label="Instagram Account" alt="Instagram Account" href="https://www.instagram.com/explore/tags/sfbeerweek/" target="_blank" rel="noopener noreferrer"><Icon icon="instagram" iconTheme="fab" /></a></li>
    <li><a aria-label="Facebook Account" alt="Facebook Account" href="https://www.facebook.com/SFBeerWeek" target="_blank" rel="noopener noreferrer"><Icon icon="facebook" iconTheme="fab" /></a></li>
    <li><a aria-label="Twitter Account" alt="Twitter Account" href="https://twitter.com/sfbeerweek" target="_blank" rel="noopener noreferrer"><Icon icon="twitter" iconTheme="fab" /></a></li>
  </ul>
);

export default SocialLinks;

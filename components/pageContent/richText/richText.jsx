import './richText.scss';

import PropTypes from 'prop-types';
import React from 'react';

const richText = ({
  input,
}) => (
  <section className="richText">
    <div className="container">
      <div className="grid">
        {/* eslint-disable-next-line */}
        <div className="item">
          <div dangerouslySetInnerHTML={{ __html: `${input}` }} />
        </div>
      </div>
    </div>
  </section>

);

richText.propTypes = {
  input: PropTypes.string,
};

richText.defaultProps = {
  input: '',
};

export default richText;

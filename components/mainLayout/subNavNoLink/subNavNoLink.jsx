import React from 'react';
import PropTypes from 'prop-types';
import scrollIntoView from 'scroll-into-view';
import HamburgerButton from '../../common/hamburgerButton/hamburgerButton';
import './subNavNoLink.scss';

class SubNavNoLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };

    this.changeActive = this.changeActive.bind(this);
  }

  changeActive() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    const { titles } = this.props;
    const { active } = this.state;
    return (
      <div className="subNav">
        <HamburgerButton
          onClick={
            () => {
              this.changeActive();
            }
          }
        />
        <ul className="horizontal">
          {
            titles.map(title => (
              title && (
              <li
                key={title}
                onClick={() => {
                  scrollIntoView(document.querySelector(`#${title}`), { align: { top: 0.065 } });
                }}
                className={`subNavItem ${active ? 'hideActive' : ''}`}
              >
                {title}
              </li>
              )))
          }
        </ul>
      </div>
    );
  }
}

SubNavNoLink.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
};

SubNavNoLink.defaultProps = {
  titles: [],
};

export default SubNavNoLink;

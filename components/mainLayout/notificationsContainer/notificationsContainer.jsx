import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import './notifications.scss';

const NotificationsContainer = ({ snacks, children }) => (
  <>
    <Notifications notifications={snacks} />
    {children}
  </>
);

NotificationsContainer.propTypes = {
  snacks: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

NotificationsContainer.defaultProps = {
  snacks: [],
  children: null,
};

export default connect(
  state => ({
    snacks: state.snacks,
  }),
)(NotificationsContainer);

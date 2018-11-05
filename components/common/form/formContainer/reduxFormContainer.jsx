// if you want to use `FormContainer`, import `formContainer.jsx`, not this file!

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

const RawForm = ({ children, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {children}
  </form>
);

RawForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const ReduxFormContainer = reduxForm({
  enableReinitialize: true,
})(RawForm);

export default ReduxFormContainer;

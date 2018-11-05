import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { bindActionCreators } from 'redux';
import Router from 'next/router';
import Notifications from 'react-notification-system-redux';
import Actions from '../../../../redux/actions';
import ReduxFormContainer from './reduxFormContainer';

// this is the `FormContainer` from `sfbeer-portal`
// but slightly modified to work with Next.js

const FormContainer = ({
  form,
  formState,
  record,
  submit,
  renderProps,
  dispatch,
  asyncAction,
  success,
  error,
  warning,
  info,
}) => {
  const values = formState[form] && formState[form].values;

  return (
    <ReduxFormContainer
      form={form}
      initialValues={record}
      onSubmit={(results) => {
        const actions = {
          clearForm: () => dispatch(reset(form)),
          asyncAction,
          router: Router,
        };
        const notifs = {
          success: msg => success({ title: msg }),
          error: msg => error({ title: msg }),
          warning: msg => warning({ title: msg }),
          info: msg => info({ title: msg }),
        };
        submit(results, actions, notifs);
      }}
    >
      {renderProps(values || {})}
    </ReduxFormContainer>
  );
};

FormContainer.propTypes = {
  form: PropTypes.string,
  formState: PropTypes.shape({}),
  renderProps: PropTypes.func,
  record: PropTypes.shape({}),
  submit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  asyncAction: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  warning: PropTypes.func.isRequired,
  info: PropTypes.func.isRequired,
};

FormContainer.defaultProps = {
  form: 'container',
  formState: {},
  record: {},
  renderProps: () => console.warn('Render Props Missing'), // eslint-disable-line
};

export default connect(
  state => ({
    formState: state.form,
  }),
  dispatch => ({
    dispatch,
    asyncAction: bindActionCreators(Actions.asyncAction, dispatch),
    success: bindActionCreators(Notifications.success, dispatch),
    error: bindActionCreators(Notifications.error, dispatch),
    warning: bindActionCreators(Notifications.warning, dispatch),
    info: bindActionCreators(Notifications.info, dispatch),
  }),
  null,
  { pure: false },
)(FormContainer);

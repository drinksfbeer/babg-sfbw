import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './textField.scss';

const TextField = ({
  containerClass,
  containerStyle,
  inputClass,
  labelClass,
  errorStyle,
  labelStyle,
  inputStyle,
  inputProps,
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
  description,
}) => (
  <div
    className={classNames({
      textField: true,
      [containerClass]: true,
    })}
    style={{ ...containerStyle }}
  >
    <div className="labels">
      {
        label &&
        <label
          style={{ ...labelStyle }}
          className={labelClass}
        >
          {label}
        </label>
      }
      {
        touched && error &&
        <span
          className="errorMessage"
          style={{ ...errorStyle }}
        >
          {error}
        </span>
      }
    </div>
    <input
      {...input}
      style={{ ...inputStyle }}
      className={inputClass}
      placeholder={placeholder}
      type={type}
      {...inputProps}
    />
    {
      description &&
      <div className="description">
        {description}
      </div>
    }
  </div>
);

TextField.defaultProps = {
  description: '',
  containerClass: '',
  inputClass: '',
  labelClass: '',
  containerStyle: {},
  errorStyle: {},
  labelStyle: {},
  inputStyle: {},
  inputProps: {},
  placeholder: '',
  type: 'text',
  meta: {
    touched: false,
    error: '',
  },
  label: '',
};

TextField.propTypes = {
  description: PropTypes.string,
  containerClass: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  errorStyle: PropTypes.shape({}),
  labelStyle: PropTypes.shape({}),
  inputStyle: PropTypes.shape({}),
  inputProps: PropTypes.shape({}),
  input: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

export default TextField;

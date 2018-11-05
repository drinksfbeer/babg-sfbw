/* eslint-disable no-confusing-arrow */

export const maxLength = max => value => value && value.length > max ?
  `Must be ${max} characters or less` : undefined;

export const minLength = min => value => value && value.length < min ?
  `Must be ${min} characters or more` : undefined;

export const required = value => value ? undefined : 'Required';

// eslint-disable-next-line no-restricted-globals
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ?
  'Only alphanumeric characters' : undefined;

export const couponCode = value => value && /^[a-zA-Z0-9_]+$/.test(value) ?
  undefined : 'Only one word';

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ?
  'Invalid phone number, must be 10 digits' : undefined;

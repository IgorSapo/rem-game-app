import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = data => {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'Identifier is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateInput;

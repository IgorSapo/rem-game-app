import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  field,
  value,
  label,
  onChange,
  checkUserExists,
  type,
  error
}) => (
  <div className={`form-group ${error ? 'has-error' : ''}`}>
    <label htmlFor={field} className="control-label">{label}</label>
    <input
      value={value}
      onChange={onChange}
      onBlur={checkUserExists}
      type={type}
      name={field}
      className="form-control"/>
    { error && <span className="help-block">{error}</span> }
  </div>
)

TextFieldGroup.propTypes = {
  field:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  error:PropTypes.string,
  type:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  checkUserExists:PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup;

import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkUserExists(e) {
    const field = e.target.name;
    const value = e.target.value;
    if (value !== '') {
      this.props.isUserExists(value)
        .then(res => {
          let errors = this.state.errors;
          if (res.data.user) {
            errors[field] = `There is user with this ${field}`;
          } else {
            delete errors[field];
          }
          this.setState({
            errors,
            invalid: !isEmpty(errors)
          });
        })
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({
        errors
      })
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.userSignupRequest(this.state)
        .then(() => {
          this.props.addFlashMessage({
            type: 'Success',
            text: 'You have signed up successfully! Welcome!'
          })
          this.props.history.push('/');
        })
        .catch(errors => this.setState({
          errors: errors.response.data,
          isLoading: false
        }));
    }
  }

  render() {
    const options = Object.keys(timezones).map(key => 
      <option key={timezones[key]} value={timezones[key]}>{key}</option>
    )

    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our community!</h2>

        <TextFieldGroup
          field='username'
          label='Username'
          value={this.state.username}
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          error={errors.username}/>

        <TextFieldGroup
          field='email'
          label='Email'
          value={this.state.email}
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          error={errors.email}/>

        <TextFieldGroup
          type='password'
          field='password'
          label='Password'
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}/>

        <TextFieldGroup
          type='password'
          field='passwordConfirmation'
          label='Password confirmation'
          value={this.state.passwordConfirmation}
          onChange={this.onChange}
          error={errors.passwordConfirmation}/>

        <div className={`form-group ${errors.timezone ? 'has-error' : ''}`}>
          <label
            htmlFor="timezone"
            className="control-label">
            Timezone
          </label>
          <select
            name="timezone"
            className="form-control"
            onChange={this.onChange}
            value={this.state.timezone}>
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
          { errors.timezone ? 
            <span className="help-block">{errors.timezone}</span> :
            null }
        </div>

        <div className="form-group">
          <button
            type="submit"
            disabled={this.state.isLoading || this.state.invalid}
            className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default withRouter(SignUpForm);

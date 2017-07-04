import React from 'react';
import timezones from '../../data/timezones';
import PropTypes from 'prop-types';

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
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state)
      .then(() => {})
      .catch(errors => this.setState({
        errors: errors.response.data,
        isLoading: false
      }));
  }

  render() {
    const options = Object.keys(timezones).map(key => 
      <option key={timezones[key]} value={timezones[key]}>{key}</option>
    )

    const { errors } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our community!</h2>

        <div className={`form-group ${errors.username ? 'has-error' : ''}`}>
          <label htmlFor="username" className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"/>
          { errors.username ? 
            <span className="help-block">{errors.username}</span> :
            null }
        </div>

        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email" className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"/>
          { errors.email ? 
            <span className="help-block">{errors.email}</span> :
            null }
        </div>

        <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"/>
          { errors.password ? 
            <span className="help-block">{errors.password}</span> :
            null }
        </div>

        <div className={`form-group ${errors.passwordConfirmation ? 'has-error' : ''}`}>
          <label htmlFor="passwordConfirmation" className="control-label">Password confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"/>
          { errors.passwordConfirmation ? 
            <span className="help-block">{errors.passwordConfirmation}</span> :
            null }
        </div>

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
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignUpForm;

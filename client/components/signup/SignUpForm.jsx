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
      timezone: ''
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
    this.props.userSignupRequest(this.state);
  }

  render() {
    const options = Object.keys(timezones).map(key => 
      <option key={timezones[key]} value={timezones[key]}>{key}</option>
    )

    return (
      <form onSubmit={this.onSubmit}>
        <h2>Join our community!</h2>

        <div className="form-group">
          <label htmlFor="username" className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirmation" className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"/>
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button
            type="submit"
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

import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors })
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.login(this.state)
        .then(res => this.props.history.push('/'))
        .catch(err => this.setState({
          errors: err.response.data.errors,
          isLoading: false
        }));
    }
  }

  render() {
    const { identifier, password, errors, isLoading } = this.state;
    return (
      <form action="" onSubmit={this.onSubmit}>
        <h2>Login</h2>
        { errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <TextFieldGroup 
          field='identifier'
          label='Username / email'
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}/>
        <TextFieldGroup 
          field='password'
          label='Password'
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type='password'/>
        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={isLoading}>
            Login
          </button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default withRouter(connect(null, { login })(LoginForm));

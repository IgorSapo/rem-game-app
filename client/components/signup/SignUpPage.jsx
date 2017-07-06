import React from 'react';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignUpPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignUpForm
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}
              isUserExists={isUserExists}/>
          </div>
        </div>
      </div>
    )
  }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignUpPage);

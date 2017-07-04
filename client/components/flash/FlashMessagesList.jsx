import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

const FlashMessagesList = ({ messages, deleteFlashMessage }) => (
  <div>
    {messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={deleteFlashMessage}/>
    )}
  </div>
)

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.flashMessages
});

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);

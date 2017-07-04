import React from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    let additionalClassName = '';
    if (type === "Success") {
      additionalClassName = 'alert-success';
    } else if (type === "Error") {
      additionalClassName = 'alert-danger';
    }

    return (
      <div className={`alert ${additionalClassName}`}>
        <button 
          className="close"
          onClick={this.onClick}>
          <span>&times;</span>
        </button>
        {text}
      </div>
    )  
  }
  
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;

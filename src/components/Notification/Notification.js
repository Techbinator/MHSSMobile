import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Toast } from 'native-base';

class Notification extends Component {
  componentDidMount() {
    Toast.show({
      text: this.props.message,
      position: this.props.position,
      buttonText: this.props.buttonText,
      duration: this.props.duration,
      type: this.props.type,
    });
  }
  render() {
    return <View />;
  }
}
Notification.propTypes = {
  message: PropTypes.string,
  position: PropTypes.string,
  buttonText: PropTypes.string,
  duration: PropTypes.number,
  type: PropTypes.string,
};

export default Notification;

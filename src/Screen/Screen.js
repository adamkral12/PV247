import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from "./Body/BodyWrapper";

export default class Screen extends Component {
  render() {
    return (
            <div>
                <BodyWrapper
                  user={this.props.user}
                  messages={this.props.messages}
                />
            </div>
    );
  }
}

Screen.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    customData: PropTypes.shape({
      profilePicture: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      createdBy: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      updatedBy: PropTypes.string.isRequired,
      customData: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
};

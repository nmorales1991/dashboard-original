import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Item from './Item'

class Message extends Component {
  state = {
    activeMessage: undefined
  }

  handleMessageToggle = (index) => {
    if (this.state.activeMessage === index) index = undefined;
    this.setState({ activeMessage: index });
  }

  render() {
    const { messages } = this.props;
    const { activeMessage } = this.state;
    return (
      <List component="div" disablePadding={true}>
        { messages && messages.map( (message, index) => (
          <Item
            key={index}
            index={index}
            message={message}
            activeMessage={activeMessage}
            toggleMessage={this.handleMessageToggle}
          />
        ))}
      </List>
    )
  }
}

Message.prototypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      date: PropTypes.number,
      subject: PropTypes.string,
      avatar: PropTypes.element,
      body: PropTypes.string
    })
  ).isRequired,
};

export default Message;
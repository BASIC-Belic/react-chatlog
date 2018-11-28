import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {

const name = props.sender === "Estragon" ? "chat-entry local" : "chat-entry remote";

  return (
    <section className={name}>
      <p className="entry-name">{props.sender}</p>
      <div className="entry-bubble">
      <p className="entry-body">{props.body}</p>
      <p className="entry-time">{<Timestamp time={props.timeStamp}/>}</p>
      </div>
    </section>
  )
};


ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  time: PropTypes.string
};

// ChatMessage.defaultProps = {
// }

export default ChatMessage;

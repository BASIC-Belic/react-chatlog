import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const ChatLog = (props) => {

  console.log(props)

  const messages = props.messages.map( (message, i) => {
    return <ChatMessage key={i} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
  });

  return (
    <section className="chat-log">
    {messages}
    </section>
  )

};

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatLog;

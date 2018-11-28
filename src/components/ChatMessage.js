import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';

const ChatMessage = (props) => {

  return (
    <section>
      <div>{props.sender}</div>
      <div>{props.body}</div>
      <div>{<Timestamp time={props.timeStamp}/>}</div>
    </section>
  )

};

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  time: PropTypes.string
};

//this goes into student, not counted as modified, just shows up
// ChatMessage.defaultProps = {
// }

export default ChatMessage;

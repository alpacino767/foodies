import React, { useState } from 'react';
import { Input } from 'antd';
import propTypes from 'prop-types';

function NewMessageInput({ sendMessage }) {
  const [messageContent, setMessageContent] = useState('');
  const handleValueChange = (e) => {
    setMessageContent(e.target.value);
  };
  const handleSendMessage = () => {
    // send message to server
    if (messageContent.length > 0) {
      sendMessage(messageContent);
      // after sending message reset input value
      setMessageContent('');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <div style={{ marginTop: '305px' }}>
      <Input
        placeholder="Type message"
        value={messageContent}
        onChange={handleValueChange}
        onKeyDown={handleKeyPress}
        style={{ width: '100%', borderRadius: '5px' }}
      />
    </div>
  );
}
NewMessageInput.propTypes = {
  sendMessage: propTypes.func.isRequired,
};

export default NewMessageInput;

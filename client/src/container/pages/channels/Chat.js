import React from 'react';
import PropTypes from 'prop-types';
// import Messages from './Messages';
// import NewMessageInput from './NewMessageInput';
import { useChatHistory } from '../../../hooks';
import { useSocket } from '../../../socketConn';

function Chat({ channelId }) {
  const { chatHistory } = useSocket();
  console.log('chatHistory chat page', chatHistory);
  const { sendMessage, messages } = useChatHistory(channelId);
  console.log(sendMessage, messages);
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '1px',
        padding: '2px',
        marginBottom: '5px',
        width: '40%',
        marginTop: '5px',
      }}
    >
      <div>Stream Chat</div>
      {/* <Messages messages={messages} />
      <NewMessageInput sendMessage={sendMessage} /> */}
    </div>
  );
}

Chat.propTypes = {
  channelId: PropTypes.string,
};

export default Chat;

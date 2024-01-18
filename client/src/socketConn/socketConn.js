import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
// import setChatHistory from '../redux/channels/actions';
// import { useSelector } from 'react-redux';

let socket;

// const { channels } = useSelector((state) => {
//   return {
//     channels: state.channels,
//   };
// });
// console.log('channels socket', channels);

// export const connectWithSocketServer = () => {
//   socket = io('http://localhost:5001');
//   socket.on('connect', () => {
//     console.log('successfully connected with io server');
//     console.log(socket.id);
//   });
//   socket.on('chat-history', (chatHistory) => {
//     console.log('chat-history-came-from-server');
//   });
//   socket.on('chat-message', (chatMessage) => {
//     console.log('new message came');
//     console.log(chatMessage);
//   });
// };

export const useSocket = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const connectWithSocketServer = () => {
    // useEffect(() => {
    const newSocket = io('http://localhost:5001');

    newSocket.on('connect', () => {
      console.log('successfully connected with io server');
      console.log(newSocket.id);
    });

    newSocket.on('chat-history', (history) => {
      setChatHistory(history);
      console.log('chat-history-came-from-server');
      console.log('history', history);
    });
    newSocket.on('chat-message', (message) => {
      console.log('new message came');
      console.log(message);
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
    // }, []);
  };
  // The empty dependency array ensures the effect runs only once
  return { connectWithSocketServer, chatHistory };
};

export const getChatHistory = (channelId) => {
  socket = io('http://localhost:5001');
  console.log('channel HISTORY FUNCTION', socket.emit('chat-history', channelId));
  socket.emit('chat-history', channelId);
};

export const sendChatMessage = (toChannel, message) => {
  socket = io('http://localhost:5001');
  socket.emit('chat-message', {
    toChannel,
    message,
  });
};

export const closeChatSubscription = (channelId) => {
  socket = io('http://localhost:5001');
  socket.emit('chat-unsubscribe', channelId);
};

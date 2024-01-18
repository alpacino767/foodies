import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getChatHistory, sendChatMessage } from '../socketConn';

export const useChatHistory = (channelId) => {
  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });
  console.log('channels state', channels);
  //   const dispatch = useDispatch();
  const newChatHistory = useMemo(() => getChatHistory(channelId), [channelId]);
  console.log('newChatHistory', newChatHistory);

  //   useEffect(() => {
  //     getChatHistory(channelId)
  //       .then((chatHistory) => {
  //         dispatch(setChatHistory(chatHistory));
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching chat history:', error);
  //       });
  //     console.log('Fetched chat history:', getChatHistory(channelId));
  //     return () => {
  //       closeChatSubscription(channelId);
  //     };
  //   }, [channelId, dispatch]);
  //   console.log('channel id', channelId);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: channels?.channelDetails.username,
      content: message,
    });
  };
  return {
    messages: channels.chatHistory?.channelId === channelId ? channels.chatHistory.messages : [],
    sendMessage,
  };
};

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import {
  getChannelsList,
  getFollowedChannels,
  followChannel,
  fetchChannelDetails,
} from '../../../redux/channels/actionCreator';
import { Button } from '../../../components/buttons/buttons';
import BlogCard from '../../../components/cards/BlogCard';
import { useSocket } from '../../../socketConn';
// import { connectWithSocketServer } from '../../../socketConn';

function Channels() {
  const { connectWithSocketServer, chatHistory } = useSocket();
  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  // const { chatHistory } = channels;

  const handleFollowChannel = (channelId) => {
    dispatch(followChannel(channelId));
  };

  useEffect(() => {
    dispatch(fetchChannelDetails(id));
  }, [id]);

  useEffect(() => {
    dispatch(getChannelsList());
    dispatch(getFollowedChannels());
    connectWithSocketServer();
  }, [getChannelsList, getFollowedChannels]);

  console.log('chatHistory', chatHistory);

  const path = '/admin';

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {channels.channelslist.map((channel) => (
        <div key={channel.id} style={{ marginBottom: '16px' }}>
          <NavLink to={`${path}/channel/${channel.id}`}>
            <BlogCard channel={channel} />
          </NavLink>
          {id !== channel.id && (
            <div>
              {channel.isOnline ? (
                <div style={{ color: 'green' }}>Online</div>
              ) : (
                <div style={{ color: 'red' }}>Offline</div>
              )}
              <Button onClick={() => handleFollowChannel(channel.id)} size="default" type="primary">
                Follow Channel
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Channels;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ReactFlvPlayer } from 'react-flv-player';
import Chat from './channels/Chat';
import { fetchChannelDetails } from '../../redux/channels/actionCreator';

function Stream({ streamUrl }) {
  return (
    <div style={{ display: 'flex' }}>
      <ReactFlvPlayer style={{ width: '5%', height: '10%', marginRight: '2%' }} url={streamUrl} />
      {/* <Chat channelId={channelId} /> */}
    </div>
  );
}
function SingleChannel() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });
  useEffect(() => {
    dispatch(fetchChannelDetails(id));
  }, [id]);
  const [channelDetails, setChannelDetails] = useState({
    title: '',
    description: '',
    streamKey: '',
    username: '',
    avatarUrl: '',
  });
  useEffect(() => {
    // Update input field values when channels data changes
    if (channels && channels.channelDetails) {
      const { channelDetails: exisitngChannelDetails } = channels;
      const { title, description, streamKey, username, streamUrl } = exisitngChannelDetails;
      if (channelDetails) {
        setChannelDetails({
          title,
          description,
          streamKey,
          username,
          streamUrl,
        });
      }
    }
  }, [channels]);

  const { streamUrl, title, username, description, isOnline } = channelDetails;
  console.log('channels state id ', channels);
  return (
    <div>
      {channelDetails.isOnline ? streamUrl && <Stream streamUrl={streamUrl} /> : <div>channel is offline</div>}
      {streamUrl && <Stream streamUrl={streamUrl} />}
      <div>
        {description}
        {title}
        {username}
        {isOnline}
      </div>
      <Chat channelId={channels.channelDetails.id} />
    </div>
  );
}

Stream.propTypes = {
  streamUrl: propTypes.string,
  // channelId: propTypes.string,
};

export default SingleChannel;

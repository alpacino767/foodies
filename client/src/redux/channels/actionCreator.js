import { toast } from 'react-hot-toast';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const {
  getChannelsBegin,
  getChannelsSuccess,
  getChannelsErr,
  UpdateChannelsBegin,
  UpdateChannelsSuccess,
  UpdateChannelsErr,
  GetChannelsListBegin,
  GetChannelsListSuccess,
  GetChannelsListErr,
  GetFollowedChannelsBegin,
  GetFollowedChannelsSuccess,
  GetFollowedChannelssErr,
  getChannelDetailsBegin,
  getChannelDetailsSuccess,
  getChannelDetailsError,
  followChannelBegin,
  followChannelSuccess,
  followChannelError,
} = actions;

const getChannels = () => {
  console.log('reaching here');
  return async (dispatch) => {
    dispatch(getChannelsBegin());

    try {
      const response = await DataService.get('/settings/channel');
      console.log('channel response', response);
      if (response.data.error) {
        dispatch(getChannelsErr('Failed to fetch channels'));
      } else {
        console.log('channel response', response.data);
        dispatch(getChannelsSuccess(response.data));
      }
    } catch (error) {
      dispatch(getChannelsErr(error.message || 'An error occurred while fetching channels'));
    }
  };
};

const UpdateChannels = (data) => {
  return async (dispatch) => {
    dispatch(UpdateChannelsBegin());
    try {
      const response = await DataService.put('/settings/channel', data);

      if (response.data.error) {
        dispatch(UpdateChannelsErr('Failed to update channel'));
        toast.error('Failed to update channel settings');
      } else {
        dispatch(UpdateChannelsSuccess(response.data));
        toast.success('Channel updated successfully');
      }
    } catch (error) {
      dispatch(UpdateChannelsErr(error.message || 'Error occurred updating channel'));
      toast.error('Error occurred updating channel');
    }
  };
};

const getChannelsList = () => {
  return async (dispatch) => {
    dispatch(GetChannelsListBegin());
    try {
      const response = await DataService.get('/channels');
      if (response.data.error) {
        dispatch(GetChannelsListErr('Failed to update channel'));
        toast.error('Failed to provide channel list');
      } else {
        dispatch(GetChannelsListSuccess(response.data.channels));
        // toast.success('Channel updated successfully');
      }
    } catch (error) {
      dispatch(getChannelsErr(error.message || 'Error occurred updating channel'));
      toast.error('Error occurred providing channels list');
    }
  };
};

const getFollowedChannels = () => {
  return async (dispatch) => {
    dispatch(GetFollowedChannelsBegin());
    try {
      const response = await DataService.get('/channels/followed');
      if (response.data.error) {
        dispatch(GetFollowedChannelssErr(response.data.error));
        toast.error('Failed to display followed channel');
      } else {
        dispatch(GetFollowedChannelsSuccess(response.data.followedChannels));
        // toast.success('Channel updated successfully');
      }
    } catch (error) {
      dispatch(GetFollowedChannelssErr(error.message || 'Error occurred updating channel'));
      toast.error('Error displaying followed channels');
    }
  };
};

const fetchChannelDetails = (channelId) => {
  return async (dispatch) => {
    dispatch(getChannelDetailsBegin());
    try {
      const response = await DataService.get(`/channels/${channelId}`);
      if (response.data.error) {
        dispatch(getChannelDetailsError('Failed to fetch channel details'));
        toast.error('Failed to update channel list');
      } else {
        dispatch(getChannelDetailsSuccess(response.data));
        // toast.success('Channel updated successfully');
      }
    } catch (error) {
      dispatch(getChannelDetailsError(error.message));
      // toast.error('Error occurred providing channel details');
    }
  };
};
const followChannel = (channelId) => {
  console.log('channel id', channelId);
  return async (dispatch) => {
    dispatch(followChannelBegin());
    try {
      const response = await DataService.post('/channels/follow', { channelId });
      if (response.data.error) {
        dispatch(followChannelError('you are already following this channel'));
        toast.error('you are already following this channel');
      } else {
        dispatch(followChannelSuccess(channelId));
        toast.success('Channel followed successfully');
      }
    } catch (error) {
      dispatch(followChannelError(error.message));
      toast.error('error following channel');
    }
  };
};

export { getChannels, UpdateChannels, getFollowedChannels, getChannelsList, fetchChannelDetails, followChannel };

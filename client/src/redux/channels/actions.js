const actions = {
  GET_CHANNELS_BEGIN: 'GET_CHANNELS_BEGIN',
  GET_CHANNELS_SUCCESS: 'GET_CHANNELS_SUCCESS',
  GET_CHANNELS_ERR: 'GET_CHANNELS_ERR',
  UPDATE_CHANNELS_BEGIN: 'UPDATE_CHANNELS_BEGIN',
  UPDATE_CHANNELS_SUCCESS: 'UPDATE_CHANNELS_SUCCESS',
  UPDATE_CHANNELS_ERROR: 'UPDATE_CHANNELS_ERROR',
  GET_CHANNELS_LIST_BEGIN: 'GET_CHANNELS_LIST_BEGIN',
  GET_CHANNELS_LIST_SUCCCESS: ' GET_CHANNELS_LIST_SUCCCESS',
  GET_CHANNELS_LIST_ERROR: 'GET_CHANNELS_LIST_ERROR',
  GET_FOLLOWED_CHANNELS_BEGIN: 'GET_FOLLOWED_CHANNELS_BEGIN',
  GET_FOLLOWED_CHANNELS_SUCCCESS: 'GET_FOLLOWED_CHANNELS_SUCCCESS',
  GET_FOLLOWED_CHANNELS_ERROR: 'GET_FOLLOWED_CHANNELS_ERROR',
  GET_CHANNELS_DETAILS_BEGIN: 'GET_CHANNELS_DETAILS_BEGIN,',
  GET_CHANNELS_DETAILS_SUCCCESS: 'GET_CHANNELS_DETAILS_SUCCESS,',
  GET_CHANNELS_DETAILS_ERROR: 'GET_CHANNELS_DETAILS_ERROR,',
  FOLLOW_CHANNEL_BEGIN: 'FOLLOW_CHANNELS_BEGIN,',
  FOLLOW_CHANNEL_SUCCESS: 'FOLLOW_CHANNELS_SUCCESS,',
  FOLLOW_CHANNEL_ERROR: 'FOLLOW_CHANNELS_ERROR,',
  SET_CHAT_HISTORY: 'SET_CHAT_HISTORY',

  getChannelsBegin: () => {
    return {
      type: actions.GET_CHANNELS_BEGIN,
    };
  },

  getChannelsSuccess: (data) => {
    return {
      type: actions.GET_CHANNELS_SUCCESS,
      data,
    };
  },

  getChannelsErr: (err) => {
    return {
      type: actions.GET_CHANNELS_ERR,
      err,
    };
  },

  UpdateChannelsBegin: () => {
    return {
      type: actions.GET_CHANNELS_BEGIN,
    };
  },

  UpdateChannelsSuccess: (data) => {
    return {
      type: actions.UPDATE_CHANNELS_SUCCESS,
      data,
    };
  },

  UpdateChannelsErr: (err) => {
    return {
      type: actions.UPDATE_CHANNELS_ERROR,
      err,
    };
  },

  GetChannelsListBegin: () => {
    return {
      type: actions.GET_CHANNELS_BEGIN,
    };
  },
  GetChannelsListSuccess: (data) => {
    return {
      type: actions.GET_CHANNELS_LIST_SUCCCESS,
      data,
    };
  },

  GetChannelsListErr: (err) => {
    return {
      type: actions.GET_CHANNELS_ERR,
      err,
    };
  },

  GetFollowedChannelsBegin: () => {
    return {
      type: actions.GET_FOLLOWED_CHANNELS_BEGIN,
    };
  },
  GetFollowedChannelsSuccess: (data) => {
    return {
      type: actions.GET_FOLLOWED_CHANNELS_SUCCCESS,
      data,
    };
  },

  GetFollowedChannelssErr: (err) => {
    return {
      type: actions.GET_FOLLOWED_CHANNELS_ERROR,
      err,
    };
  },
  getChannelDetailsBegin: () => {
    return {
      type: actions.GET_CHANNELS_DETAILS_BEGIN,
    };
  },
  getChannelDetailsSuccess: (data) => {
    return {
      type: actions.GET_CHANNELS_DETAILS_SUCCCESS,
      data,
    };
  },
  getChannelDetailsError: (error) => {
    return {
      type: actions.GET_CHANNELS_DETAILS_ERROR,
      error,
    };
  },
  followChannelBegin: () => {
    return {
      type: actions.FOLLOW_CHANNEL_BEGIN,
    };
  },
  followChannelSuccess: (channelId) => {
    return {
      type: actions.FOLLOW_CHANNEL_SUCCESS,
      channelId,
    };
  },
  followChannelError: (error) => {
    return {
      type: actions.FOLLOW_CHANNEL_ERROR,
      error,
    };
  },
  setChatHistory: (chatHistory) => {
    return {
      type: actions.SET_CHAT_HISTORY,
      payload: chatHistory,
    };
  },
};
export default actions;

import actions from './actions';

const {
  GET_CHANNELS_BEGIN,
  GET_CHANNELS_SUCCESS,
  GET_CHANNELS_ERR,
  UPDATE_CHANNELS_BEGIN,
  UPDATE_CHANNELS_SUCCESS,
  UPDATE_CHANNELS_ERR,
  GET_CHANNELS_LIST_BEGIN,
  GET_CHANNELS_LIST_SUCCCESS,
  GET_CHANNELS_LIST_ERROR,
  GET_FOLLOWED_CHANNELS_BEGIN,
  GET_FOLLOWED_CHANNELS_SUCCCESS,
  GET_FOLLOWED_CHANNELS_ERROR,
  GET_CHANNELS_DETAILS_BEGIN,
  GET_CHANNELS_DETAILS_SUCCCESS,
  GET_CHANNELS_DETAILS_ERROR,
  FOLLOW_CHANNEL_BEGIN,
  FOLLOW_CHANNEL_SUCCESS,
  FOLLOW_CHANNEL_ERROR,
  SET_CHAT_HISTORY,
} = actions;

const initState = {
  loading: false,
  error: null,
  channelslist: [],
  followedchannels: [],
  channelDetails: {},
  chatHistory: { channelId: null, messages: [] },
};
/**
 *
 * @todo impure state mutation/explaination
 */
const ChannelsReducer = (state = initState, action) => {
  const { type, data, err, channelId, payload } = action;

  switch (type) {
    case GET_CHANNELS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: data,
        loading: false,
      };

    case GET_CHANNELS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case UPDATE_CHANNELS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: data,
        loading: false,
      };

    case UPDATE_CHANNELS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_CHANNELS_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_CHANNELS_LIST_SUCCCESS:
      return {
        ...state,
        channelslist: data,
        loading: false,
      };

    case GET_CHANNELS_LIST_ERROR:
      return {
        ...state,
        channels: data,
        loading: false,
      };

    case GET_FOLLOWED_CHANNELS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_FOLLOWED_CHANNELS_SUCCCESS:
      return {
        ...state,
        followedchannels: data,
        loading: false,
      };

    case GET_FOLLOWED_CHANNELS_ERROR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_CHANNELS_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case GET_CHANNELS_DETAILS_SUCCCESS:
      return {
        ...state,
        channelDetails: data,
        loading: false,
      };

    case GET_CHANNELS_DETAILS_ERROR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case FOLLOW_CHANNEL_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case FOLLOW_CHANNEL_SUCCESS:
      return {
        ...state,
        channelId,
        loading: false,
      };

    case FOLLOW_CHANNEL_ERROR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SET_CHAT_HISTORY:
      console.log('payload', payload);
      return {
        ...state,
        chatHistory: payload,
      };
    default:
      return state;
  }
};
export default ChannelsReducer;

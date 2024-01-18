import { combineReducers } from 'redux';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import ChannelsReducer from './channels/reducers';

const rootReducers = combineReducers({
  message: readMessageReducer,

  notification: readNotificationReducer,
  auth: authReducer,
  ChangeLayoutMode,
  channels: ChannelsReducer,
});

export default rootReducers;

// import { useState } from 'react';
// import { getChannelSettings } from '../../api';
// const useChannelSettings = () => {
//   const [channelSettings, setChannelSettings] = useState(null);
//   const fetchChannelSettings = async () => {
//     const response = await getChannelSettings();
//     if (response.error) {
//       return toast.error(response.excption?.response?.data || 'Error occured fetching channel settings');
//     }
//     setChannelSettings({
//       username: response.data.username,
//       title: response.data.title,
//       description: response.data.description,
//       avatarUrl: response.data.avatarUrl,
//       StreamKey: response.data.StreamKey,
//     });
//   };
//   const saveSettings = async () => {};

//   return {
//     isFetching: !channelSettings,
//     channelSettings,
//     saveSettings,
//   };
// };

// export default useChannelSettings;

import { Menu } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UilSetting } from '@iconscout/react-unicons';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { getChannelsList, getFollowedChannels } from '../redux/channels/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });
  // if (channels.error) {
  //   toast.error(channels.error);
  // }
  const { channelslist, followedchannels } = channels || {};
  const dispatch = useDispatch();

  const followedChannels = channelslist.filter((channel) => followedchannels.includes(channel.id));

  useEffect(() => {
    dispatch(getChannelsList());
    dispatch(getFollowedChannels());
  }, [getChannelsList, getFollowedChannels]);

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const path = '/admin';
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  // const followedChannelsMenu = followedChannels.map((channel) =>
  //   getItem(
  //     <NavLink key={channel.id} onClick={toggleCollapsed} to={`${path}/channel/${channel.id}`}>
  //       {channel.username}
  //     </NavLink>,
  //     `channel-${channel.id}`,
  //     null,
  //   ),
  // );
  const followedChannelsMenu = followedChannels.map((channel) =>
    getItem(
      <NavLink key={channel.id} onClick={toggleCollapsed} to={`${path}/channel/${channel.id}`}>
        {channel.username}{' '}
        {channel.isOnline ? (
          <span style={{ color: 'green', marginLeft: '5px' }}>online</span>
        ) : (
          <span style={{ color: 'red', marginLeft: '5px' }}>offline</span>
        )}
      </NavLink>,
      `channel-${channel.id}`,
      null,
    ),
  );

  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to={path}>
        {t('Blank')} {t('page')}
      </NavLink>,
      'demo-1',
      null,
    ),
    getItem(t('Browse'), '', !topMenu && null, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/channel`}>
          {t('Channels')}
        </NavLink>,
        'inbox',
        null,
      ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
      //     {t('read')} {t('email')}
      //   </NavLink>,
      //   'single',
      //   null,
      // ),
    ]),

    getItem(t('followed channels'), '', !topMenu && null, followedChannelsMenu),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/pages/settings`}>
        {t('settings')}
      </NavLink>,
      'settings',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/settings`}>
          <UilSetting />
        </NavLink>
      ),
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;

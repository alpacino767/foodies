import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SettingWrapper } from './overview/style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import StreamKey from '../../pages/channels/Settings/StreamKey';
// import ChannelSettings from '../../pages/channels/Settings/ChannelSettings';
import { Cards } from '../../../components/cards/frame/cards-frame';
// import { getChannels } from '../../../redux/channels/actionCreator';

const Profile = lazy(() => import('./overview/Profile'));
const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/Passwoard'));
const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'));
const AuthorBox = lazy(() => import('./overview/ProfileAuthorBox'));
const CoverSection = lazy(() => import('../overview/CoverSection'));

function Settings() {
  const PageRoutes = [
    {
      path: '/admin',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'My Profile',
    },
  ];

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getChannels());
  // }, []);

  const { channels } = useSelector((state) => {
    return {
      channels: state.channels,
    };
  });
  // console.log('channels', channels);
  const [channelDetails, setChannelDetails] = useState({
    title: '',
    description: '',
    streamKey: '',
    username: '',
    avatarUrl: '',
  });

  useEffect(() => {
    // Update input field values when channels data changes
    if (channels && channels.channels) {
      const channel = channels.channels;

      // console.log('channel:', channel);

      if (channel) {
        // Update the channelSettings state with channel details
        setChannelDetails({
          title: channel.title,
          description: channel.description,
          streamKey: channel.streamKey,
          username: channel.username,
        });
      }
    }
  }, [channels]);

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="settings" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col xxl={6} lg={8} md={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton avatar />
                </Cards>
              }
            >
              <AuthorBox />
            </Suspense>
          </Col>
          <Col xxl={18} lg={16} md={14} xs={24}>
            <SettingWrapper>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton avatar />
                  </Cards>
                }
              >
                <CoverSection />
              </Suspense>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton paragraph={{ rows: 20 }} />
                  </Cards>
                }
              >
                {' '}
                {/* <ChannelSettings settings={channelSettings} /> */}
                <StreamKey streamKey={channelDetails.streamKey} />
                <Routes>
                  <Route index element={<Profile />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="account" element={<Account />} />
                  <Route path="password" element={<Password />} />
                  <Route path="social" element={<SocialProfiles />} />
                  <Route path="notification" element={<Notification />} />
                </Routes>
              </Suspense>
            </SettingWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Settings;

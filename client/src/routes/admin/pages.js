import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inbox from '../../container/email/overview/Inbox';
import Channels from '../../container/pages/channels/Channels';
import SingleChannel from '../../container/pages/SingleChannel';

const BlankPage = lazy(() => import('../../container/pages/BlankPage'));
const Settings = lazy(() => import('../../container/profile/settings/Settings'));

function PagesRoute() {
  return (
    <Routes>
      <Route path="/" element={<BlankPage />} />
      <Route path="/channel/" element={<Channels />} />
      <Route path="admin/email/inbox" element={<Inbox />} />
      <Route path="/channel/:id" element={<SingleChannel />} />
      <Route path="settings/*" element={<Settings />} />
    </Routes>
  );
}

export default PagesRoute;

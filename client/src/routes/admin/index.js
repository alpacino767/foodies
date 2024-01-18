import { Spin } from 'antd';
import React, { Suspense, useEffect, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Pages from './pages';
import withAdminLayout from '../../layout/withAdminLayout';

const Inbox = lazy(() => import('../../container/email/Email'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<Pages />} />
        <Route path="pages/*" element={<Pages />} />
        <Route path="email/*" element={<Inbox />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);

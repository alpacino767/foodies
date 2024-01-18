import { PageHeader } from '../../components/page-headers/page-headers';

function Channels() {
  const PageRoutes = [
    {
      path: '/channels',
      breadcrumbName: 'Email',
    },
    {
      path: '',
      breadcrumbName: 'Email',
    },
  ];
  return <PageHeader className="ninjadash-page-header-main" title="Dashboard" routes={PageRoutes} />;
}

export default Channels;

import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { PageHeaderBanner } from '../../components/banners/Banners';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import BlogCard from '../../components/cards/BlogCard';

import cardData from '../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlankPage() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: '',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Dashboard" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards headless>
              <PageHeaderBanner
                title="Welcome To  Dashboard"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              />
              <Row gutter={25} className="mt-sm-10">
                {BlogCardData.slice(0, 4).map((blog) => {
                  return (
                    <Col key={blog.id} xl={8} sm={12} xs={24}>
                      <BlogCard item={blog} />
                    </Col>
                  );
                })}
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default BlankPage;

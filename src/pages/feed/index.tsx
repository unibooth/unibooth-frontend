import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import Search from '@assets/feed-search.svg';
import { Layout } from '@components/Layout';

const Feed: NextPage = () => {
  return (
    <Layout title="알림" noHeader>
      <Header>
        <div>축제피드</div>
        <Search />
      </Header>
    </Layout>
  );
};

export default Feed;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 44px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

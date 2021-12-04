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
      <CategoryWrapper>
        <div className="tab">체험부스</div>
        <div className="tab">마켓부스</div>
        <div className="tab">공연</div>
        <div className="tab">기타</div>
      </CategoryWrapper>
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
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 52px;
  background: #f1f2f3;

  .tab {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    padding: 9px 16px;
    background: #ffffff;
    border: 0.5px solid #d5d7dd;
    box-sizing: border-box;
    border-radius: 22px;
  }
`;

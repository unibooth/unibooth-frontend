import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import Comment from '@assets/feed-comment.svg';
import Create from '@assets/feed-create.svg';
import Search from '@assets/feed-search.svg';
import { Layout } from '@components/Layout';
import { FEED_CONTENT_DATA } from '@data';

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
      {FEED_CONTENT_DATA.map((feed) => (
        <FeedWrapper key={feed.id}>
          <div className="grey">{feed.category}</div>
          <div>{feed.content}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="grey">
              {feed.createTime} · {feed.univercity}
            </div>
            <div style={{ color: '#FF8A66', display: 'flex', alignItems: 'center' }}>
              <Comment />
              <div style={{ marginLeft: '6px' }}>{feed.commentLength}</div>
            </div>
          </div>
        </FeedWrapper>
      ))}
      <FloatCreateButton>
        <Create />
      </FloatCreateButton>
    </Layout>
  );
};

export default Feed;

const Header = styled.div`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
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
  margin-top: 44px;

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

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-bottom: 0.5px solid #d5d7dd;
  .grey {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    color: #818798;
  }
`;

const FloatCreateButton = styled.div`
  background: #ff6433;
  border-radius: 12px;
  position: fixed;
  left: 315px;
  top: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
`;

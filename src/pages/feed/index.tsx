import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import Comment from '@assets/feed-comment.svg';
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
      {/* <FeedWrapper>
        <div className="grey">공연</div>
        <div>오늘 중앙대 박재범 오는 날!! 아 내일인가?</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="grey">1분전 · 중앙대학교</div>
          <div style={{ color: '#FF8A66', display: 'flex', alignItems: 'center' }}>
            <Comment />
            <div style={{ marginLeft: '6px' }}>1</div>
          </div>
        </div>
      </FeedWrapper>
      <FeedWrapper>
        <div className="grey">공연</div>
        <div>
          홍대 올해 축제 라인업 대박이다 싸이 보고 싶었는데 저번에 놀러갔는데 역시 홍대더라 부스가
          예술적이고 쾌활해~~! 또 갈까
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="grey">1분전 · 중앙대학교</div>
          <div style={{ color: '#FF8A66', display: 'flex', alignItems: 'center' }}>
            <Comment />
            <div style={{ marginLeft: '6px' }}>1</div>
          </div>
        </div>
      </FeedWrapper> */}
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

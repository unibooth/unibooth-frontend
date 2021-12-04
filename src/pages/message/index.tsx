import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Layout } from '@components/Layout';
import MessageHeader from '@components/MessageHeader';
import { CHAT_DATA } from '@data';
import { NOTIFICATION_DATA } from '@data';

const Message: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Layout title="채팅" noHeader>
      <MessageHeader tab={currentTab} onTabChange={setCurrentTab} />
      {currentTab === 0 ? (
        <div style={{ marginTop: '88px' }}>
          {CHAT_DATA.map((chat) => (
            <ChatWrapper key={chat.id}>
              <img src={chat.profileUrl} />
              <div style={{ marginLeft: '12px', width: '100%' }}>
                <ChatTop>
                  <div>{chat.name}</div>
                  <div className="date">{chat.createdAt}</div>
                </ChatTop>
                <ChatBottom>{chat.content}</ChatBottom>
              </div>
            </ChatWrapper>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: '88px' }}>
          {NOTIFICATION_DATA.map((noti) => (
            <NorificationWrapper key={noti.id}>
              <img src={noti.categoryIcon} width="36px" height="36px" />
              <NotiContent>
                <div>{noti.content}</div>
                <div className="time">{noti.createdAt}</div>
              </NotiContent>
            </NorificationWrapper>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Message;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 78px;
  padding: 16px;
  border-bottom: 0.5px solid #d5d7dd;
`;

const ChatTop = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  .date {
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    color: #818798;
  }
`;
const ChatBottom = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
const NorificationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 98px;
  padding: 16px;

  .new {
    background: rgba(255, 236, 230, 0.32);
  }
`;

const NotiContent = styled.div`
  margin-left: 12px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  .time {
    margin-top: 6px;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    color: #818798;
  }
`;

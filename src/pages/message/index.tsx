import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Layout } from '@components/Layout';
import MessageHeader from '@components/MessageHeader';

const Message: NextPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Layout title="채팅" noHeader>
      <MessageHeader tab={currentTab} onTabChange={setCurrentTab} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda facilis at commodi
        corrupti voluptatum ratione hic unde. Mollitia recusandae maiores voluptatem doloremque
        sapiente consequuntur incidunt ad eum pariatur aliquid!
      </div>
    </Layout>
  );
};

export default Message;

const TabRow = styled.nav`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding-bottom: -0.5px;
  border-bottom: 0.5px solid #d5d7dd;
`;

const TabButton = styled.a<{ isSelected: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.isSelected ? '#222' : '#d5d7dd')};

  margin-right: 24px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => (props.isSelected ? '#FF6433' : 'transparent')};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  padding: 0 16px;
  transition: height 0.2s ease-out;
  background-color: ${({ theme }) => theme.colors.white};
`;

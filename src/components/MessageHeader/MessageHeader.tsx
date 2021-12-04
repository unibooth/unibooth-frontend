import { useState } from 'react';
import styled from 'styled-components';

export type MessageHeaderProps = {
  tab: number;
  onTabChange: (tab: number) => void;
};

export default function MessageHeader(props: MessageHeaderProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Wrapper>
      <Header>메시지</Header>
      <TabRow>
        {['채팅', '알림'].map((label, index) => (
          <TabButton
            key={index}
            isSelected={props.tab === index}
            onClick={() => {
              props.onTabChange(index);
            }}
          >
            {label}
          </TabButton>
        ))}
      </TabRow>
    </Wrapper>
  );
}
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
const Header = styled.header`
  display: flex;
  align-items: center;
  height: 44px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
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

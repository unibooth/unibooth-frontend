import { Spin } from 'antd';
import styled from 'styled-components';

import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 124, color: '#FF6433' }} spin />;

export default function ReqeustStamp() {
  return (
    <ReqeustStampWrapper>
      <Title>엔터테이너에게 스탬프를 요청하고 있어요...</Title>
      <SpinWrapper>
        <Spin indicator={antIcon} />
      </SpinWrapper>
    </ReqeustStampWrapper>
  );
}

const ReqeustStampWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  padding: 16px;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Title = styled.div`
  margin-top: 100px;
  width: 235px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  font-size: 24px;
`;

const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

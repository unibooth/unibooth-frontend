import styled from 'styled-components';

import ErrorIcon from '@assets/error_outline.svg';

export default function AboutStamp() {
  return (
    <StampInformationWrapper>
      <Title>스탬프를 수집하고 포인트를 받으세요!</Title>
      <p>dd</p>
      <ErrorWrapper>
        <ErrorIcon style={{ width: '50px' }} />
        <ErrorContent>
          내가 스탬프를 받은 부스, 전송 가능한 스탬프 횟수를 초과한 부스는 스탬프 지도에 표시되지
          않아요. 엔터테이너와 떨어져 있으면 스탬프를 받을 수 없어요.
        </ErrorContent>
      </ErrorWrapper>
      <ConfirmButton>확인</ConfirmButton>
    </StampInformationWrapper>
  );
}

const Title = styled.h1`
  width: 179px;

  margin-top: 100px;
  margin-bottom: 48px;
  text-align: left;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;
const StampInformationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  padding: 16px;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  width: 100%;
  height: 100%;
  background-color: white;
`;

const ErrorWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 100px;
`;

const ErrorContent = styled.p`
  /* padding-left: 20px; */
  color: #ff6433;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`;
const ConfirmButton = styled.button`
  background: #ff6433;
  border-radius: 8px;
  border: none;

  width: 343px;
  height: 56px;

  margin-top: 24px;
  color: #ffffff;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import ErrorIcon from '@assets/error_outline.svg';
import { aboutStampInfo } from '@recoil/modal';

const step = [
  { id: 1, imageUrl: '/images/step1.png', content: '스탬프를 받을 수 있는\n 부스를 확인한다.' },
  {
    id: 2,
    imageUrl: '/images/step2.png',
    content: `내가 참여한 부스의\n 스탬프 받기를 누른다.`,
  },
  { id: 3, imageUrl: '/images/step3.png', content: '내 위치가 부스에 있는지\n 확인되면 끝!' },
];

export default function AboutStamp() {
  const [isStampInfoVisible, setStampInfoVisible] = useRecoilState(aboutStampInfo);

  return (
    <StampInformationWrapper>
      <Title>스탬프를 수집하고 굿즈를 받으세요!</Title>
      {step.map((step) => (
        <StepWrapper key={step.id}>
          <Image src={step.imageUrl} />
          <div>
            <CircleNumber>{step.id}</CircleNumber>
            <StepContent>{step.content}</StepContent>
          </div>
        </StepWrapper>
      ))}
      {/* <ErrorWrapper>
        <ErrorIcon style={{ width: '50px' }} />
        <ErrorContent>
          내가 스탬프를 받은 부스, 전송 가능한 스탬프 횟수를 초과한 부스는 스탬프 지도에 표시되지
          않아요. <br />
          <br />
          엔터테이너와 떨어져 있으면 스탬프를 받을 수 없어요.
        </ErrorContent>
      </ErrorWrapper> */}
      <ConfirmButton
        onClick={() => {
          setStampInfoVisible(false);
        }}
      >
        확인
      </ConfirmButton>
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
const StepWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: 96px;
  margin-bottom: 24px;
`;
const Image = styled.img`
  width: 96px;
  height: 96px;
`;
const CircleNumber = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  padding: 6px 0;
  margin-bottom: 8px;
  color: #ff6433;
  background: #ffece6;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
`;

const StepContent = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222222;
  font-size: 20px;
  word-wrap: break-word;
`;
const ErrorWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 56px;
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

  margin-top: 154px;
  color: #ffffff;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

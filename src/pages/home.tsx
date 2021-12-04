import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Add from '@assets/home-add.svg';
import View from '@assets/livebooth-visibility.svg';
import BoothCard from '@components/BoothCard';
import BoothHeader from '@components/BoothHeader';
import BottomNav from '@components/BottomNav';
import { Layout } from '@components/Layout/styles';
import LiveBoothCard from '@components/LiveBoothCard';
import NewHomeHeader from '@components/NewHomeHeader';
import Splash from '@components/Splash';
import UnivBackdrop from '@components/UnivBackdrop';
import { BOOTH_DATA } from '@data';
import { LIVE_BOOTH_DATA } from '@data';
import { shuffle } from '@helpers';
import { Booth } from '@interfaces';
import { LiveBooth } from '@interfaces';
import { requestPostingList } from '@request';

import { splashState } from '../recoil/modal';

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [BOOTH_DATA, setBOOTH_DATA] = useState([]);
  const [booths, setBooths] = useState([]);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [currentUniv, setCurrentUniv] = useState('중앙대');
  const [isSplashOpen, setSplashOpen] = useRecoilState(splashState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      requestPostingList('중앙대')
        .then((res) => {
          setBOOTH_DATA(res.data);
          setBooths(res.data);
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    }
  });

  useEffect(() => {
    setBooths(
      currentTab === 0
        ? shuffle(BOOTH_DATA)
        : currentTab === 1
        ? BOOTH_DATA.filter((v) => v.type === '마켓')
        : currentTab === 2
        ? BOOTH_DATA.filter((v) => v.type === '체험')
        : BOOTH_DATA.filter((v) => v.type === '술집'),
    );
  }, [currentTab]);

  setTimeout(() => {
    setSplashOpen(false);
  }, 3000);

  return (
    <>
      {' '}
      {isLoading ? (
        <Layout>
          <NewHomeHeader />
          <LiveboothWrapper>
            <LiveButton>LIVE</LiveButton>
            <LiveBoothTitle>지금, 축제로 모여!</LiveBoothTitle>
            <LiveViewDiv>
              <View style={{ marginRight: '8.75px' }} />
              199
            </LiveViewDiv>
          </LiveboothWrapper>
          {/* <HomeHeader
          tab={currentTab}
          onTabChange={setCurrentTab}
          onOpenUnivBackdrop={() => {
            setIsBackdropOpen(true);
          }}
          univ={currentUniv}
        />
        <UnivBackdrop
          isOpen={isBackdropOpen}
          onClose={() => {
            setIsBackdropOpen(false);
            setCurrentUniv('서울 전 대학');
          }}
        /> */}
          <HomeTitle>부스를 찾아볼까요?</HomeTitle>
          <ListWrapper>
            {LIVE_BOOTH_DATA.map((booth) => (
              <LiveBoothCard key={booth.id} {...booth} />
            ))}
          </ListWrapper>
          <ListWrapper>
            {booths.map((booth) => (
              <BoothCard key={booth.id} {...booth} />
            ))}
          </ListWrapper>
          <AddFloatButton>
            <Add />
          </AddFloatButton>
          <BottomNav />
        </Layout>
      ) : null}
      {isSplashOpen && <Splash />}
    </>
  );
}

const ListWrapper = styled.main`
  display: flex;
  flex-direction: column;

  padding: 32px 16px 200px;
`;

const LiveboothWrapper = styled.div`
  position: relative;
  background-image: url('/images/livebooth1.gif');
  background-repeat: no-repeat;
  /* background-size: 375px 562px; */
  background-size: cover;
  width: 100%;
  height: 562px;
`;

const LiveButton = styled.div`
  position: absolute;
  left: 24px;
  top: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 32px;
  background: #ff6433;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 22px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

const LiveBoothTitle = styled.div`
  position: absolute;
  left: 24px;
  top: 490px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

const LiveViewDiv = styled.div`
  position: absolute;
  left: 24px;
  top: 520px;

  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: white;
`;

const HomeTitle = styled.div`
  margin-top: 40px;
  padding: 16px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

const AddFloatButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  position: fixed;
  top: 690px;
  right: 10px;

  background: #ff6433;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
`;

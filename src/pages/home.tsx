import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import BoothCard from '@components/BoothCard';
import BottomNav from '@components/BottomNav';
import HomeHeader from '@components/HomeHeader';
import { Layout } from '@components/Layout/styles';
import Splash from '@components/Splash';
import UnivBackdrop from '@components/UnivBackdrop';
import { BOOTH_DATA } from '@data';
import { shuffle } from '@helpers';

import { splashState } from './recoil/modal';

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState(0);
  const [booths, setBooths] = useState(BOOTH_DATA);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const [currentUniv, setCurrentUniv] = useState('중앙대');
  const [isSplashOpen, setSplashOpen] = useRecoilState(splashState);

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
      <Layout>
        <HomeHeader
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
        />
        <ListWrapper>
          {booths.map((booth) => (
            <BoothCard key={booth.id} {...booth} />
          ))}
        </ListWrapper>
        <BottomNav />
      </Layout>
      {isSplashOpen && <Splash />}
    </>
  );
}

const ListWrapper = styled.main`
  display: flex;
  flex-direction: column;

  padding: 32px 16px 200px;
`;

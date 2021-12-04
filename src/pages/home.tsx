import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import BoothCard from '@components/BoothCard';
import BoothHeader from '@components/BoothHeader';
import BottomNav from '@components/BottomNav';
import { Layout } from '@components/Layout/styles';
import NewHomeHeader from '@components/NewHomeHeader';
import Splash from '@components/Splash';
import UnivBackdrop from '@components/UnivBackdrop';
import { BOOTH_DATA } from '@data';
import { shuffle } from '@helpers';
import { Booth } from '@interfaces';
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
          <LiveboothWrapper>d</LiveboothWrapper>
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
          <ListWrapper>
            {booths.map((booth) => (
              <BoothCard key={booth.id} {...booth} />
            ))}
          </ListWrapper>
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
  background-image: url('/images/livebooth1.gif');
  background-repeat: no-repeat;
  background-size: 375px 562px;
  width: 100%;
  height: 562px;
`;

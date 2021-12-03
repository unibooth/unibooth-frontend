import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import AboutStamp from '@components/AboutStamp';
import { Layout } from '@components/Layout';
import NaverMap from '@components/NaverMap/NaverMap';
import { aboutStampState } from '@pages/recoil/modal';

const Map: NextPage = () => {
  const router = useRouter();
  const [isDoneVisible, setDoneVisible] = useState(false);
  const [isStampInfoVisible, setStampInfoVisible] = useRecoilState(aboutStampState);

  useEffect(() => {
    if (!router.query.done) {
      return;
    }
    setDoneVisible(true);
  }, [!!router.query.done]);

  return (
    <Layout noHeader>
      <NaverMap />
      {isDoneVisible && (
        <DoneImageWrapper
          onClick={() => {
            setDoneVisible(false);
            router.replace('/map');
          }}
        >
          <img src="/images/stamp-done.png" style={{ width: '343px' }} />
        </DoneImageWrapper>
      )}
      {isStampInfoVisible && (
        <AboutStamp
        // onClick={() => {
        //   setStampInfoVisible(false);
        //   router.replace('/map');
        // }}
        />
      )}
    </Layout>
  );
};

export default Map;

const DoneImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

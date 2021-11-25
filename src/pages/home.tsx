import { Tabs } from 'antd';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

import { HomeLayout } from '@components/Layout';

const Home: NextPage = () => {
  return (
    <HomeLayout title="홈">
      <div>
        <BoothWrapper>
          <Booth>
            <Image src="/images/home1.png" width="343" height="514" />
          </Booth>
          <Booth>
            <Image src="/images/home2.png" width="343" height="514" />
          </Booth>
          <Booth>
            <Image src="/images/home3.png" width="343" height="514" />
          </Booth>
          <Booth>
            <Image src="/images/home4.png" width="343" height="514" />
          </Booth>
          <Booth>
            <Image src="/images/home5.png" width="343" height="514" />
          </Booth>
        </BoothWrapper>
      </div>
    </HomeLayout>
  );
};

export default Home;

const BoothWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  padding-top: 20px;
`;

const Booth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 100vw; */
`;

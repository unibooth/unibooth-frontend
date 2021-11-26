import Image from 'Next/Image';
import { Tabs } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import BoothCard from '@components/BoothCard';
import { HomeLayout } from '@components/Layout';

const Home: NextPage = () => {
  const router = useRouter();
  const boothDummyData = [
    {
      id: 1,
      title: '일러스트레이터 한나입니다.',
      img: '/images/home1.jpg',
      like: 48,
      comment: '한나님 일러스트 색감 너무 예뻐요!',
      comment2: '한나님과 같은 학교일 줄이야.. 남몰래 응원하는...',
    },
    {
      id: 2,
      title: '일러스트레이터 한나입니다.',
      img: '/images/home2.png',
      like: 48,
      comment: '한나님 일러스트 색감 너무 예뻐요!',
      comment2: '한나님과 같은 학교일 줄이야.. 남몰래 응원하는...',
    },
  ];

  return (
    <HomeLayout title="홈">
      <div>
        <BoothWrapper>
          <Booth onClick={() => router.push('/booth')}>
            <Image src="/images/home1.jpg" width="343" height="514" />
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
      {boothDummyData.map((booth) => (
        <BoothCard
          key={booth.id}
          title={booth.title}
          like={booth.like}
          img={booth.img}
          comment={booth.comment}
          comment2={booth.comment2}
        />
      ))}
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
  padding-top: 32px;
`;

const Booth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

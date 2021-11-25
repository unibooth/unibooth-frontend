import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BoothBottomNav } from '@components/BottomNav';

const Booth = () => {
  const router = useRouter();

  return (
    <Layout>
      <Main></Main>
      <BoothBottomNav />
    </Layout>
  );
};

export default Booth;

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;
const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

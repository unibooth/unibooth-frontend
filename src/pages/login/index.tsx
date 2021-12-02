ßimport type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Splash from '@assets/splash.svg';

const Login: NextPage = () => {
  return (
    <Wrapper>
      <Link href="/home">
        <Splash style={{ width: '59.25px' }} />
      </Link>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 812px;
`;

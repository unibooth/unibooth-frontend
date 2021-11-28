import Image from 'Next/Image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Dot3 from '@assets/dot3.svg';
import LeftArrow from '@assets/left-arrow.svg';
import Star from '@assets/star.svg';
import Tag from '@assets/tag.svg';
import Tag1 from '@assets/tag1.svg';
import Tag2 from '@assets/tag2.svg';
import { BoothBottomNav } from '@components/BottomNav';

const slideUp = keyframes`
from {
  transform: translateY(3vh);
}
to {
  transform: translateY(0px);

}
`;
const isServer = typeof window === 'undefined';

const Booth = () => {
  // if (isServer) return;

  const layoutRef = useRef();
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clickTag, setClickTag] = useState(false);

  useLayoutEffect(() => {
    // if (layoutRef.current) {
    //   layoutRef.current.addEventListener('scroll', handleScroll);
    //   console.log('sdf')
    //   return () => layoutRef.current.removeEventListener('scroll', handleScroll);
    // }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  const handleScroll = () => {
    console.log('scroll event', window.scrollY);
    setScrollPosition(window.scrollY);
  };
  // useEffect(() => {
  //   const updateScroll = () => {
  //     setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  //   };
  //   window.addEventListener('scroll', updateScroll);
  //   console.log(scrollPosition);
  // });

  const clickHandler = () => {
    setClickTag((prev) => !prev);
  };

  return (
    <Layout>
      {scrollPosition && scrollPosition < 100 ? (
        <Header2 className="container">
          {' '}
          <Link href="/home" passHref>
            <a>
              <LeftArrow />
            </a>
          </Link>
          <div>
            <Star />
            <Dot3 style={{ marginLeft: '38px' }} />
          </div>
        </Header2>
      ) : (
        <Header className="container">
          <Link href="/home" passHref>
            <a>
              <LeftArrow />
            </a>
          </Link>
          <div>
            <Star />
            <Dot3 style={{ marginLeft: '38px' }} />
          </div>
        </Header>
      )}

      <Main>
        <Image src="/images/booth-1.png" width="375" height="375" />
        <Image src="/images/booth-2.png" width="375" height="284" />
        <Image src="/images/booth-3.png" width="375" height="281" />
        <Image src="/images/booth-4.png" width="375" height="253.378" />
        <div style={{ position: 'relative', left: 0, top: 0 }}>
          <Image src="/images/booth-5.png" width="375" height="281" onClick={clickHandler} />
          {clickTag && (
            <div
              style={{
                transition: 'opacity 1s ease-in-out',
                animationDuration: '0.5s',
                animationName: '${slideUp}',
              }}
            >
              <Tag style={{ position: 'absolute', left: '16px', bottom: '16px' }} />
              <Tag1 style={{ position: 'absolute', left: '25%', top: '10%' }} />
              <Tag2 style={{ position: 'absolute', left: '56%', top: '40%' }} />
            </div>
          )}
        </div>

        <Image src="/images/booth-6.png" width="375" height="347.747093" />
      </Main>
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

const Header = styled.div`
  position: absolute;
  width: 90%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  color: white;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%);
`;
const Header2 = styled.div`
  position: absolute;
  width: 90%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  color: #818798;
  background: white;
`;
const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

const TagsWrapper = styled.div`
  /* position: absolute; */
  z-index: 10;
  animation-duration: 0.5s;
  animation-name: ${slideUp};
`;

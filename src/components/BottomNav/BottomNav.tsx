import Link from 'next/link';
import { useRouter } from 'next/router';

import Feed from '@assets/feed.svg';
import Home from '@assets/home.svg';
import Map from '@assets/map.svg';
import Message from '@assets/message.svg';
import MyPage from '@assets/mypage.svg';

import * as S from './styles';

const BottomNav = () => {
  const router = useRouter();
  return (
    <S.BottomNav style={{ zIndex: 1002, background: 'white' }}>
      <Link href="/home" passHref>
        <a className={`nav-link ${router.asPath === '/home' ? 'active' : ''}`}>
          <Home className="svg-paths" style={{ fontSize: '18px' }} />
          <span>홈</span>
        </a>
      </Link>

      <Link href="/feed" passHref>
        <a className={`nav-link ${router.asPath === '/feed' ? 'active' : ''}`}>
          <Feed className="svg-paths" style={{ fontSize: '18px' }} />
          <span>축제피드</span>
        </a>
      </Link>

      <Link href="/map" passHref>
        <a className={`nav-link ${router.asPath === '/map' ? 'active' : ''}`}>
          <Map className="svg-paths" style={{ fontSize: '18px' }} />
          <span>지도</span>
        </a>
      </Link>

      <Link href="/message" passHref>
        <a className={`nav-link ${router.asPath === '/message' ? 'active' : ''}`}>
          <Message className="svg-paths" style={{ fontSize: '18px' }} />
          <span>메시지</span>
        </a>
      </Link>
      <Link href="/mypage" passHref>
        <a className={`nav-link ${router.asPath === '/mypage' ? 'active' : ''}`}>
          <MyPage className="svg-paths" style={{ fontSize: '18px' }} />
          <span>마이페이지</span>
        </a>
      </Link>
    </S.BottomNav>
  );
};

export default BottomNav;

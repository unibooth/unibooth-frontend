import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  BellOutlined,
  CommentOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Alram from '@assets/alarm.svg';
import Chat from '@assets/chat.svg';
import Home from '@assets/home.svg';
import Loc from '@assets/loc.svg';
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

      <Link href="/notification" passHref>
        <a className={`nav-link ${router.asPath === '/notification' ? 'active' : ''}`}>
          <Alram className="svg-paths" style={{ fontSize: '18px' }} />
          <span>축제피드</span>
        </a>
      </Link>

      <Link href="/map" passHref>
        <a className={`nav-link ${router.asPath === '/map' ? 'active' : ''}`}>
          <Loc className="svg-paths" style={{ fontSize: '18px' }} />
          <span>지도</span>
        </a>
      </Link>

      <Link href="/chat" passHref>
        <a className={`nav-link ${router.asPath === '/chat' ? 'active' : ''}`}>
          <Chat className="svg-paths" style={{ fontSize: '18px' }} />
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

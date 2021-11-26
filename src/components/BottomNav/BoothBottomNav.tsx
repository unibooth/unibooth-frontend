import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  BellOutlined,
  CommentOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

import * as S from './styles';

const BoothBottomNav = () => {
  const router = useRouter();
  return (
    <S.BottomNav className="container">
      <Link href="/home" passHref>
        <a className={`nav-link ${router.asPath === '/home' ? 'active' : ''}`}>
          <HomeOutlined className="svg-path" style={{ fontSize: '18px' }} />
          <span>홈</span>
        </a>
      </Link>

      <Link href="/notification" passHref>
        <a className={`nav-link ${router.asPath === '/notification' ? 'active' : ''}`}>
          <BellOutlined className="svg-complicated" style={{ fontSize: '18px' }} />
          <span>알림</span>
        </a>
      </Link>

      <Link href="/map" passHref>
        <a className={`nav-link ${router.asPath === '/map' ? 'active' : ''}`}>
          <EnvironmentOutlined className="svg-paths" style={{ fontSize: '18px' }} />
          <span>지도</span>
        </a>
      </Link>
      <S.Button>문의하기</S.Button>
    </S.BottomNav>
  );
};

export default BoothBottomNav;

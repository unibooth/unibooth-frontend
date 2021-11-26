import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  BellOutlined,
  CommentOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Comment from '@assets/comment.svg';
import Heart from '@assets/heart.svg';
import Share from '@assets/share.svg';

import * as S from './styles';

const BoothBottomNav = () => {
  const router = useRouter();
  return (
    <S.BottomNav className="container">
      <Link href="/home" passHref>
        <a className={`nav-link ${router.asPath === '/home' ? 'active' : ''}`}>
          <Heart className="svg-path" style={{ fontSize: '18px' }} />
          <span>48</span>
        </a>
      </Link>

      <Link href="/notification" passHref>
        <a className={`nav-link ${router.asPath === '/notification' ? 'active' : ''}`}>
          <Comment className="svg-complicated" style={{ fontSize: '18px' }} />
          <span>12</span>
        </a>
      </Link>

      <Link href="/map" passHref>
        <a className={`nav-link ${router.asPath === '/map' ? 'active' : ''}`}>
          <Share className="svg-paths" style={{ fontSize: '18px' }} />
          <span>3</span>
        </a>
      </Link>
      <S.Button>문의하기</S.Button>
    </S.BottomNav>
  );
};

export default BoothBottomNav;

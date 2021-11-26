import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Comment from '@assets/comment.svg';
import Heart from '@assets/heart.svg';
import HeartLike from '@assets/heart_like.svg';
import Share from '@assets/share.svg';

import * as S from './styles';

const BoothBottomNav = () => {
  const router = useRouter();
  const [like, setLike] = useState(48);
  const [isLike, setIsLike] = useState(false);

  const clickHandler = () => {
    setLike(isLike === true ? like - 1 : like + 1);
    setIsLike((prev) => !prev);
  };

  return (
    <S.BottomNav className="container">
      <a className={`nav-link`} onClick={clickHandler}>
        {isLike ? (
          <HeartLike className="svg-path" style={{ fontSize: '18px' }} />
        ) : (
          <Heart className="svg-path" style={{ fontSize: '18px' }} />
        )}
        <span>{like}</span>
      </a>
      <a className={`nav-link`}>
        <Comment className="svg-complicated" style={{ fontSize: '18px' }} />
        <span>12</span>
      </a>

      <a className={`nav-link`}>
        <Share className="svg-paths" style={{ fontSize: '18px' }} />
        <span>3</span>
      </a>
      <S.Button>문의하기</S.Button>
    </S.BottomNav>
  );
};

export default BoothBottomNav;

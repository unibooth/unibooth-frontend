import styled from 'styled-components';

import ImageIcon from '@assets/booth-bottomnav-image.svg';
import CommentIcon from '@assets/booth-comment.svg';
import HeartIcon from '@assets/booth-heart.svg';
import ShareIcon from '@assets/share.svg';
import { Booth } from '@interfaces';

type BoothFooterProps = Pick<Booth, 'likeCount' | 'shareCount'> & {
  commentCount: number;
};

export default function BoothFooter({ likeCount, commentCount, shareCount }: BoothFooterProps) {
  const buttons = [
    { Icon: HeartIcon, count: likeCount },
    { Icon: ImageIcon, count: commentCount },
    { Icon: ShareIcon, count: shareCount },
  ];

  return (
    <Wrapper>
      {buttons.map(({ Icon, count }) => (
        <div
          key={count}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '36px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            width={24}
            height={24}
            fill="#222"
            style={{ marginBottom: '2px', padding: 'auto' }}
          />
          <p
            style={{
              color: '#222',
              fontSize: '12px',
              lineHeight: '16px',
            }}
          >
            {count}
          </p>
        </div>
      ))}
      <Button onClick={() => alert('문의하기')}>문의하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999999;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 16px;

  background-color: #fff;

  border-top: 0.5px solid #d5d7dd;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 163px;
  height: 48px;
  border-radius: 8px;

  background-color: #ff6433;

  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  border: none;
  outline: none;
`;

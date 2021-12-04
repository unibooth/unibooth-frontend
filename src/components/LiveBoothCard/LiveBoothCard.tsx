import Link from 'next/link';
import styled from 'styled-components';

import CommentIcon from '@assets/comment.svg';
import HeartIcon from '@assets/heart.svg';
import ImageIcon from '@assets/image-icon.svg';
import View from '@assets/livebooth-visibility.svg';
import { LiveBooth } from '@interfaces';

export default function LiveBoothCard({ id, name, type, view, like, imageUrl }: LiveBooth) {
  const base64Image = 'data:image/png;base64,' + imageUrl;
  return (
    <Wrapper backgroundImageUrl={imageUrl}>
      <LiveButton>LIVE</LiveButton>
      <Header>
        <Name>{name}</Name>
        <LikeWrapper>
          <HeartIcon width={26} height={25} style={{ marginBottom: 8 }} fill="#fff" />
          <LikeCount>{like}</LikeCount>
        </LikeWrapper>
      </Header>
      {/* {comments.length > 0 && (
          <CommentsWrapper>
            {comments.slice(0, 2).map((comment) => (
              <CommentRow key={comment.id}>
                <CommentIcon width={15} height={15} style={{ marginRight: 10 }} fill="#fff" />
                <CommentContent>{comment.content}</CommentContent>
              </CommentRow>
            ))}
          </CommentsWrapper>
        )} */}
      <ImageContent>
        <View style={{ marginRight: '3px' }} />
        <div>{view}</div>
      </ImageContent>
    </Wrapper>
  );
}

const Wrapper = styled.a<{ backgroundImageUrl: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 514px;
  padding: 24px;
  margin-bottom: 48px;
  border-radius: 16px;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%),
    url('${(props) => props.backgroundImageUrl}');
  background-size: cover;
  mix-blend-mode: normal;

  text-decoration: none;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 12px;
`;

const Name = styled.h3`
  width: 247px;

  font-weight: 500;
  font-size: 24px;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.white};
`;

const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4px 0;
`;

const LikeCount = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

const CommentContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};

  width: 268px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ImageContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;

const LiveButton = styled.div`
  position: absolute;
  left: 24px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 32px;
  background: #ff6433;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 22px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

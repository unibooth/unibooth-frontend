import Link from 'next/link';
import styled from 'styled-components';

import HeartIcon from '@assets/heart.svg';
import CommentIcon from '@assets/comment.svg';
import { Booth } from '@interfaces';

export default function BoothCard({ id, name, imageUrl, likeCount, comments }: Booth) {
  return (
    <Link href={`/booth/${id}`} passHref>
      <Wrapper backgroundImageUrl={imageUrl}>
        <Header>
          <Name>{name}</Name>
          <LikeWrapper>
            <HeartIcon width={26} height={25} style={{ marginBottom: 8 }} fill="#fff" />
            <LikeCount>{likeCount}</LikeCount>
          </LikeWrapper>
        </Header>
        {comments.length > 0 && (
          <CommentsWrapper>
            {comments.slice(0, 2).map((comment) => (
              <CommentRow key={comment.id}>
                <CommentIcon width={15} height={15} style={{ marginRight: 10 }} fill="#fff" />
                <CommentContent>{comment.content}</CommentContent>
              </CommentRow>
            ))}
          </CommentsWrapper>
        )}
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.a<{ backgroundImageUrl: string }>`
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
  font-size: 36px;
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

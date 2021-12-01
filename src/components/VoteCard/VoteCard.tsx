import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CommentBooth from '@assets/comment-booth.svg';
import Like from '@assets/like.svg';

interface IBoothCard {
  id: number;
  type: string;
  title: string;
  img: string;
  like: number;
  comments: string[];
}
const VoteCard = ({ id, type, title, img, like, comments }: IBoothCard) => {
  const router = useRouter();
  return (
    <CardWrapper img={img}>
      <ContentWrapper>
        <TopWrapper>
          <Title>{title}</Title>
          <LikeWrapper>
            <Like />
            <div>{like}</div>
          </LikeWrapper>
        </TopWrapper>
        <CommentWrapper>
          <Comment>
            <CommentBooth />
            <span className="text">{comments[0]}</span>
          </Comment>
          <Comment>
            <CommentBooth />
            <span className="text">{comments[1]}</span>
          </Comment>
        </CommentWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default VoteCard;

type ImageType = {
  img: string;
};

const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: white;
  width: 247px;
  height: 86px;
`;
const CardWrapper = styled.div<ImageType>`
  background-image: url(${(props) => props.img});
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
  mix-blend-mode: normal;
  border-radius: 16px;
  margin: 24px 16px;
  width: 343px;
  height: 513px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LikeWrapper = styled.div`
  color: white;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 342px 24px 24px 24px;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 3px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  color: white;
  width: 100%;
  height: 22px;
  .text {
    margin-left: 2px;
  }
`;

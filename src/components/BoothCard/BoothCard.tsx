import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CommentBooth from '@assets/comment-booth.svg';

interface IBoothCard {
  id?: number;
  title?: string;
  img: string;
  like?: number;
  comment?: string;
  comment2?: string;
}
const BoothCard = ({ id, title, img, like, comment, comment2 }: IBoothCard) => {
  const router = useRouter();

  return (
    <Wrapper img={img}>
      <Title>{title}</Title>
      <div>{like}</div>
      <CommentWrapper>
        <CommentBooth />
        <Comment>{comment}</Comment>
        <Comment>{comment2}</Comment>
      </CommentWrapper>
    </Wrapper>
  );
};

export default BoothCard;

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
const Wrapper = styled.div<ImageType>`
  background-image: url(${(props) => props.img});
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
  mix-blend-mode: normal;
  border-radius: 16px;
  margin: 24px 16px;
  width: 343px;
  height: 513px;
`;

const CommentWrapper = styled.div`
  display: flex;
`;

const Comment = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: white;
  width: 269px;
  height: 22px;
`;

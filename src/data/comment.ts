import { getById } from '@helpers';
import { Comment } from '@interfaces';

import { USER_DATA } from './user';

// @TODO: 더미데이터 채우기!
export const COMMENT_DATA: Comment[] = [
  {
    id: 1,
    createdAt: new Date(),
    content: '한나님 일러스트 색감 너무 예뻐요!',
    user: getById(1, USER_DATA),
    boothId: 1,
  },
  {
    id: 2,
    createdAt: new Date(),
    content:
      '한나님과 같은 학교일 줄이야.. 남몰래 응원하는 팬입니다! 작품 항상 잘 보고 있어요. 화이팅 ❤️',
    user: getById(1, USER_DATA),
    boothId: 1,
  },
];

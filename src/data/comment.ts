import { getById } from '@helpers';
import { Comment } from '@interfaces';

import { ENTERTAINER_DATA } from './entertainer';

// @TODO: 더미데이터 채우기!
export const COMMENT_DATA: Comment[] = [
  {
    id: 1,
    createdAt: new Date(),
    content: '한나님 일러스트 색감 너무 예뻐요!',
    user: getById(1, ENTERTAINER_DATA),
    boothId: 1,
  },
  {
    id: 2,
    createdAt: new Date(),
    content:
      '한나님과 같은 학교일 줄이야.. 남몰래 응원하는 팬입니다! 작품 항상 잘 보고 있어요. 화이팅 ❤️',
    user: getById(1, ENTERTAINER_DATA),
    boothId: 1,
  },
  {
    id: 3,
    createdAt: new Date(),
    content: '퍼가요~',
    user: getById(1, ENTERTAINER_DATA),
    boothId: 1,
  },
  {
    id: 4,
    createdAt: new Date(),
    content: '마지막 수업 끝나면 달려갑니다 예약 받아주세요 ㅎㅎ',
    user: getById(1, ENTERTAINER_DATA),
    boothId: 2,
  },
];

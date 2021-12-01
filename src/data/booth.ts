import { findByWhere, getById } from '@helpers';
import { Booth } from '@interfaces';

import { BOOTH_CONTENT_DATA } from './booth-content';
import { COMMENT_DATA } from './comment';
import { USER_DATA } from './user';

export const BOOTH_DATA: Booth[] = [
  {
    id: 1,
    type: '마켓',
    name: '일러스트레이터 한나입니다.',
    imageUrl: '/images/home1.png',
    location: '20번',
    date: '2021. 11. 22 월 - 11. 23 화',

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 1 }, COMMENT_DATA),

    likeCount: 48,
    shareCount: 3,
  },
];

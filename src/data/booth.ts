import { findByWhere, getById } from '@helpers';
import { Booth } from '@interfaces';

import { BOOTH_CONTENT_DATA } from './booth-content';
import { COMMENT_DATA } from './comment';
import { USER_DATA } from './user';

// @TODO: 데이터 알맞게 채워넣기
export const BOOTH_DATA: Booth[] = [
  {
    id: 1,
    univ: '중앙대',
    type: '마켓',
    name: '일러스트레이터 한나입니다.',
    imageUrl: '/images/04.jpg',
    location: '20번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504719,
    longitude: 126.955069,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 1 }, COMMENT_DATA),

    likeCount: 48,
    shareCount: 3,
  },
  {
    id: 2,
    univ: '서강대',
    type: '술집',
    name: '중대 참 달고나',
    imageUrl: '/images/07.jpg',
    location: '21번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504619,
    longitude: 126.955006,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 3,
    univ: '서강대',
    type: '술집',
    name: '식품공학과의\n달달한 마카롱',
    imageUrl: '/images/01.jpg',
    location: '21번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504619,
    longitude: 126.955006,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 4,
    univ: '서강대',
    type: '술집',
    name: '다트 자신 있는 사람 모여라',
    imageUrl: '/images/02.jpg',
    location: '21번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504619,
    longitude: 126.955006,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 5,
    univ: '서강대',
    type: '술집',
    name: '실사판 배틀그라운드',
    imageUrl: '/images/03.jpg',
    location: '21번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504619,
    longitude: 126.955006,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 6,
    univ: '서강대',
    type: '술집',
    name: '주류 셀프\n신개념 포차',
    imageUrl: '/images/06.jpg',
    location: '21번',
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504619,
    longitude: 126.955006,

    user: getById(1, USER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
];

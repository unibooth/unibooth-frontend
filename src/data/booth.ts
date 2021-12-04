import { findByWhere, getById } from '@helpers';
import { Booth } from '@interfaces';

import { BOOTH_CONTENT_DATA } from './booth-content';
import { COMMENT_DATA } from './comment';
import { ENTERTAINER_DATA } from './entertainer';

// @TODO: 데이터 알맞게 채워넣기
export const BOOTH_DATA: Booth[] = [
  {
    id: 1,
    university: '중앙대',
    type: '마켓',
    name: '일러스트레이터 한나입니다.',
    imageUrl: '/images/home1.jpg',
    location: 20,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 37.504719,
    longitude: 126.955069,
    image: null,
    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 1 }, COMMENT_DATA),

    likeCount: 48,
    shareCount: 3,
  },
  {
    id: 2,
    university: '중앙대',
    type: '체험',
    name: '페이스페인팅',
    imageUrl: '/images/home2.jpg',
    location: 21,
    image: null,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 38.504719,
    longitude: 127.955069,

    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 3,
    university: '중앙대',
    type: '마켓',
    name: '식품공학과의\n달달한 마카롱',
    imageUrl: '/images/home3.jpg',
    location: 22,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 39.504719,
    longitude: 128.955069,
    image: null,
    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 4,
    university: '중앙대',
    type: '마켓',
    name: '커피',
    imageUrl: '/images/home4.jpg',
    location: 34,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 39.504719,
    longitude: 130.955069,
    image: null,
    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 5,
    university: '중앙대',
    type: '체험',
    name: '운동장',
    imageUrl: '/images/home5.jpg',
    location: 23,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 36.504719,
    longitude: 125.955069,
    image: null,
    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
  {
    id: 6,
    university: '중앙대',
    type: '술집',
    name: '주류 셀프\n신개념 포차',
    imageUrl: '/images/home6.jpg',
    location: 25,
    date: '2021. 11. 22 월 - 11. 23 화',
    latitude: 35.504719,
    longitude: 124.955069,
    image: null,
    entertainer: getById(1, ENTERTAINER_DATA),
    contents: findByWhere({ boothId: 1 }, BOOTH_CONTENT_DATA),
    comments: findByWhere({ boothId: 2 }, COMMENT_DATA),

    likeCount: 32,
    shareCount: 5,
  },
];

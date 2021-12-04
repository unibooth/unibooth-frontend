import { Notification } from '@interfaces';

export const NOTIFICATION_DATA: Notification[] = [
  {
    id: 1,
    categoryIcon: '@assets/notiIcon1.svg',
    content: '🎓 돌발 학교 퀴즈! 학교 퀴즈를 풀고, 학교 인증을 완료해보세요.',
    createdAt: '2시간 전',
  },
  {
    id: 2,
    categoryIcon: '@assets/notiIcon2.svg',
    content: '✨ 내가 즐겨찾기한 엔터테이너 “빵 굽는 사람”님의 새 부스가 등록되었어요!',
    createdAt: '2주 전',
  },
  {
    id: 3,
    categoryIcon: '@assets/notiIcon2.svg',
    content: '🎉 유니부스님, 엔터테이너 프로필이 성공적으로 만들어졌어요! 지금 확인해보세요.',
    createdAt: '2주 전',
  },
];

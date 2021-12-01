import { Comment } from '@interfaces';

// @TODO: 더미데이터 채우기!
export const COMMENT_DATA: Comment[] = [
  {
    id: 1,
    createdAt: new Date(),
    /** 댓글 내용 */
    content: '한나님 일러스트 색감 너무 예뻐요!',

    user: {
      id: 1,
      nickname: '효진',
      imageUrl: '', //댓글 단 사람 이미지인가요?
      univercity: '중앙대학교',
      /** 학교 인증이 완료되었는가 */
      isVerified: true,
    },

    boothId: 1,
  },
  {
    id: 2,
    createdAt: new Date(),
    /** 댓글 내용 */
    content: '한나님 일러스트 색감 너무 예뻐요!',

    user: {
      id: 2,
      nickname: '한나님팬',
      imageUrl: '', //댓글 단 사람 이미지인가요?
      univercity: '중앙대학교',
      /** 학교 인증이 완료되었는가 */
      isVerified: true,
    },

    boothId: 1,
  },
];

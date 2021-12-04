export interface Entertainer {
  id: number;
  nickname: string;
  imageUrl: string;
  university: string;
  /** 학교 인증이 완료되었는가 */
  isVerified: boolean;
  /** @example '엔터테이너' */
  role: string;
  image: string;
}


import { Entertainer } from './entertainer.interface';

export interface Comment {
  id: number;
  createdAt: Date;
  /** 댓글 내용 */
  content: string;

  entertainer: Entertainer;

  boothId: number;
}

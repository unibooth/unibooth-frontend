import { User } from './user.interface';

export interface Comment {
  id: number;
  createdAt: Date;
  /** 댓글 내용 */
  content: string;

  user: User;

  boothId: number;
}

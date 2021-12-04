import { BoothContent } from './booth-content.interface';
import { Comment } from './comment.interface';
import { Entertainer } from './entertainer.interface';

export type BoothType = '마켓' | '체험' | '술집';

export interface Booth {
  id: number;
  /** @example '중앙대' */
  university: string;
  /** 부스 분류 */
  type: BoothType;
  /** @example '일러스트레이터 한나입니다' */
  name: string;
  imageUrl: string;
  /** @example 20 */
  location: number;
  /** @example '2021. 11. 22 월 - 11. 23 화' */
  date: string;

  image: any;
  latitude: number;
  longitude: number;

  entertainer: Entertainer;
  contents: BoothContent[];
  comments: Comment[];

  likeCount: number;
  shareCount: number;
}

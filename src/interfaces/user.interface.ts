export interface User {
	id: number;
	nickname: string;
	imageUrl: string;
	univercity: string;
	/** 학교 인증이 완료되었는가 */
	isVerified: boolean;
}
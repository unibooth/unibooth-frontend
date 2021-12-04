import { BoothContentTag } from "./booth-content-tag.interface";

export interface BoothContent {
	id: number;
	boothId: number;
	image: string;
	imageUrl: string;
	description: string;

	tags: BoothContentTag[];
}
import { BoothContentTag } from "./booth-content-tag.interface";

export interface BoothContent {
	id: number;
	boothId: number;

	imageUrl: string;
	description: string;

	tags: BoothContentTag[];
}
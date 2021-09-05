import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IContentData {
	data: {
		entries: {
			frontmatter: {
				id: number;
				imageDark: IGatsbyImageData;
				imageLight: IGatsbyImageData;
				title: string;
			};
			details: string;
		}[];
	};
}

import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IContentData {
	data: {
		entries: {
			frontmatter: {
				additional: { info: { note: string }[] };
				id: number;
				image: IGatsbyImageData;
				imageDark: IGatsbyImageData;
				imageLight: IGatsbyImageData;
				link: string;
				repo: string;
				title: string;
			};
			details: string;
		}[];
	};
}

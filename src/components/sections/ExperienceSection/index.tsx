import React from 'react';

import { Flex, useColorModeValue } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Sizes } from '@data/constants';
import { setSize, useScreenSizeCheck } from '@utils';

import { SectionContainer } from '../SectionContainer';
import { ImageView } from './ImageView';
import { DetailsView } from './DetailsView';
import { TitleView } from './TitleView';

interface IExperienceData {
	experience: {
		entries: {
			frontmatter: {
				id: number;
				image: IGatsbyImageData;
				title: string;
			};
			details: string;
		}[];
	};
}

export const ExperienceSection: React.FC = () => {
	const isLargeScreen = useScreenSizeCheck();

	const after = {
		bgColor: `blue.600`,
		content: `''`,
		h: setSize(0.05),
		m: `${setSize(Sizes.gap)} auto`,
		w: `70%`,
	};

	const boxShadowColor = useColorModeValue(
		`rgba(0, 0, 0, 0.4)`,
		`rgba(255, 255, 255, 0.4)`
	);

	const {
		experience: { entries },
	}: IExperienceData = useStaticQuery(query);

	const variants = {
		initial: {},
		animate: {},
	};

	return (
		<SectionContainer
			heading="What I Have Learned"
			section={{ id: `experience`, count: 2 }}
			variants={variants}
		>
			{entries &&
				entries.map(entry => {
					const { id, image: src, title } = entry.frontmatter;
					const leftAlignedImage = id % 2 === 0;
					const image = getImage(src);

					return (
						<Flex
							_after={isLargeScreen ? { content: `none` } : after}
							_last={{
								_after: { content: `none` },
							}}
							flexDir="column"
							key={id}
							mt={setSize(Sizes.gap * (isLargeScreen ? 3 : 1))}
							position="relative"
						>
							{!isLargeScreen && (
								<TitleView alignment="center" title={title} />
							)}
							<Flex flexDir="column">
								<ImageView
									boxShadowColor={boxShadowColor}
									image={image!}
									isLargeScreen={isLargeScreen}
									leftAlignedImage={leftAlignedImage}
									title={title}
								/>
								<Flex
									flexDir="column"
									h={isLargeScreen ? 'initial' : '100%'}
									left={leftAlignedImage ? 0 : `unset`}
									position={isLargeScreen ? 'absolute' : 'relative'}
									right={leftAlignedImage ? `unset` : 0}
									top={0}
									w={isLargeScreen ? '52%' : '100%'}
								>
									{isLargeScreen && (
										<TitleView
											alignment={
												leftAlignedImage ? `flex-start` : `flex-end`
											}
											title={title}
										/>
									)}
									<DetailsView
										boxShadowColor={boxShadowColor}
										details={entry.details}
										isLargeScreen={isLargeScreen}
									/>
								</Flex>
							</Flex>
						</Flex>
					);
				})}
		</SectionContainer>
	);
};

const query = graphql`
	{
		experience: allMarkdownRemark(
			sort: { fields: frontmatter___id, order: ASC }
		) {
			entries: nodes {
				frontmatter {
					title
					id
					image {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH)
						}
					}
				}
				details: html
			}
		}
	}
`;

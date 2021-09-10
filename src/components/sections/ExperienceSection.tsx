import React from 'react';

import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Sizes } from '@data/constants';
import { IContentData } from '@data/models';
import { setSize, useColors, useScreenSizeCheck } from '@utils';

import { DetailsDisplay, ImageDisplay, TitleDisplay } from '@components';
import { SectionContainer } from './SectionContainer';

export const ExperienceSection: React.FC = () => {
	const { normalHighlightColor } = useColors();
	const isLargeScreen = useScreenSizeCheck();

	const after = {
		bgColor: normalHighlightColor,
		content: `''`,
		h: setSize(0.05),
		m: `${setSize(Sizes.gap)} auto`,
		w: `70%`,
	};

	const {
		data: { entries },
	}: IContentData = useStaticQuery(query);

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
								<TitleDisplay alignment="center" title={title} />
							)}
							<Flex flexDir="column">
								<ImageDisplay
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
										<TitleDisplay
											alignment={
												leftAlignedImage ? `flex-start` : `flex-end`
											}
											title={title}
										/>
									)}
									<DetailsDisplay
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
		data: allMarkdownRemark(
			filter: { frontmatter: { section: { eq: "experience" } } }
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

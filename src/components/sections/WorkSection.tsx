import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Colors, Sizes } from '@data/constants';
import { IContentData } from '@data/models';
import {
	setSize,
	useBoxShadow,
	useColors,
	useScreenSizeCheck,
} from '@utils';

import {
	DetailsDisplay,
	ImageDisplay,
	LinksDisplay,
	TitleDisplay,
} from '@components';
import { SectionContainer } from './SectionContainer';

export const WorkSection: React.FC = () => {
	const { normalBoxShadow } = useBoxShadow();
	const { normalHighlightColor, surfaceColor } = useColors();
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

	const lightBg = surfaceColor === Colors.light.surfaceColor;

	const variants = {
		initial: {},
		animate: {},
	};

	return (
		<SectionContainer
			heading="Things I've Made"
			section={{ id: `work`, count: 3 }}
			variants={variants}
		>
			<Flex
				_after={isLargeScreen ? { content: `none` } : after}
				alignItems="center"
				flexDir="column"
				mt={setSize(Sizes.gap)}
			>
				<Flex
					bgColor={isLargeScreen ? surfaceColor : `transparent`}
					borderRadius={setSize(Sizes.borderRadius)}
					boxShadow={isLargeScreen ? normalBoxShadow : `none`}
					p={setSize(Sizes.gap)}
					w={isLargeScreen ? `60%` : `full`}
				>
					<Text>
						I have loved every moment of this journey, and now it's time to
						put my skills to use! I've created many projects that have
						never seen the light, as most of us do. Below are a few of them
						that have.
					</Text>
				</Flex>
			</Flex>
			{entries &&
				entries.map(entry => {
					const {
						additional,
						id,
						imageDark,
						imageLight,
						link,
						repo,
						title,
					} = entry.frontmatter;

					const image = getImage(lightBg ? imageDark : imageLight);
					const leftAlignedImage = id % 2 !== 0;
					const linkAlignment = !isLargeScreen
						? 'center'
						: leftAlignedImage
						? 'flex-end'
						: 'flex-start';
					const note = additional ? additional.info[0].note : null;

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
								{(link || repo) && (
									<LinksDisplay
										alignment={linkAlignment}
										link={link}
										repo={repo}
									/>
								)}
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
										note={note}
										title={title}
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
			filter: { frontmatter: { section: { eq: "work" } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			entries: nodes {
				frontmatter {
					additional {
						info: childrenMarkdownRemark {
							note: rawMarkdownBody
						}
					}
					id
					imageDark {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH)
						}
					}
					imageLight {
						childImageSharp {
							gatsbyImageData(layout: FULL_WIDTH)
						}
					}
					link
					repo
					title
				}
				details: html
			}
		}
	}
`;

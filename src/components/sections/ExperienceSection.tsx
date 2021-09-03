import React from 'react';

import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Colors, Sizes } from '@data/constants';
import { setSize } from '@utils';

import { SectionContainer } from './SectionContainer';
import { ImageView } from '../common';

interface IComponentProps {}

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

export const ExperienceSection: React.FC<IComponentProps> = () => {
	const bgColor = useColorModeValue(
		Colors.light.surfaceColor,
		Colors.dark.surfaceColor
	);

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
			heading="What I Know"
			section={{ id: `experience`, count: 2 }}
			variants={variants}
		>
			{entries &&
				entries.map(entry => {
					const { id, image: src, title } = entry.frontmatter;
					const image = getImage(src);

					return (
						<Flex key={id} mb={setSize(Sizes.gap)} position="relative">
							<ImageView
								boxShadowColor={boxShadowColor}
								image={image!}
								title={title}
							/>

							<Flex
								flexDir="column"
								position="absolute"
								right={0}
								top="10%"
								w="52%"
							>
								<Flex as="title" justifyContent="flex-end">
									<Text
										color="blue.400"
										fontFamily="Roboto Mono"
										fontSize="0.80em"
										mb={setSize(Sizes.gap / 2)}
									>
										{title}
									</Text>
								</Flex>
								<Flex
									__css={{ '& a': { color: `green.500` } }}
									bgColor={bgColor}
									borderRadius={setSize(Sizes.borderRadius / 2)}
									boxShadow={`10px 10px 15px -5px ${boxShadowColor}`}
									dangerouslySetInnerHTML={{ __html: entry.details }}
									fontSize="0.90em"
									p={setSize(Sizes.gap)}
								/>
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
							gatsbyImageData
						}
					}
				}
				details: html
			}
		}
	}
`;

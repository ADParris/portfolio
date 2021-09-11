import React from 'react';

import { Flex, Link, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import { Sizes } from '@data/constants';
import { ISiteMetadataLink } from '@data/models';
import { setSize, useColors } from '@utils';

import { Socials } from '../common';

interface IComponentProps {
	isLargeScreen: boolean;
	socials: ISiteMetadataLink[];
}

export const Footer: React.FC<IComponentProps> = ({
	isLargeScreen,
	socials,
}) => {
	const {
		site: {
			meta: { author, repo },
		},
	} = useStaticQuery(query);

	const { hoverHighlightColor, secondaryTextColor } = useColors();

	return (
		<Flex
			alignItems="center"
			as="footer"
			flexDir="column"
			justifyContent="center"
			minH={setSize(Sizes.footerMaxHeight)}
			mt={setSize(Sizes.gap)}
			p={setSize(Sizes.gap)}
			w="full"
		>
			<Flex
				alignItems="center"
				color={secondaryTextColor}
				flex={1}
				flexDir="column"
				justifyContent="center"
				maxW={setSize(Sizes.maxWidth)}
				w="full"
			>
				{!isLargeScreen && (
					<Socials isLargeScreen={isLargeScreen} socials={socials} />
				)}
				<Link
					href={repo}
					isExternal
					mt={isLargeScreen ? 'initial' : setSize(0.5)}
				>
					<Text
						_hover={{ color: hoverHighlightColor }}
						css={{ wordSpacing: `-3px` }}
						fontFamily="Roboto Mono"
						fontSize="0.75em"
						letterSpacing="-0.5px"
					>
						{`Built with 💖 by ${author}`}
					</Text>
				</Link>
				<Text
					css={{ wordSpacing: `-3px` }}
					fontFamily="Roboto Mono"
					fontSize="0.75em"
					letterSpacing="-0.5px"
				>
					General layout idea by&nbsp;
					<Link
						_hover={{ color: hoverHighlightColor }}
						href="https://brittanychiang.com/"
					>
						Brittany Chiang
					</Link>
					.
				</Text>
			</Flex>
		</Flex>
	);
};

const query = graphql`
	{
		site {
			meta: siteMetadata {
				author
				repo
			}
		}
	}
`;

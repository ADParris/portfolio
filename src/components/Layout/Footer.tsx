import React from 'react';

import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import { Colors, Sizes } from '@data/constants';
import { ISiteMetadataLink } from '@data/models';
import { setSize } from '@utils';

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

	const textColor = useColorModeValue(
		Colors.light.secondaryTextColor,
		Colors.dark.secondaryTextColor
	);

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
				color={textColor}
				flex={1}
				flexDir={isLargeScreen ? 'initial' : 'column'}
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
						css={{ wordSpacing: `-3px` }}
						fontFamily="Roboto Mono"
						fontSize="0.75em"
						letterSpacing="-0.5px"
					>
						{`Designed & Built by ${author}`}
					</Text>
				</Link>
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

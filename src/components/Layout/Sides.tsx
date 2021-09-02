import React from 'react';

import { Flex, Link, Text } from '@chakra-ui/react';

import { animatedLinkHover } from '@data/constants';
import { ISiteMetadataLink } from '@data/models';
import { setSize } from '@utils';

import { Socials } from '@components';

interface IComponentProps {
	email?: string;
	isLargeScreen: boolean;
	socials?: ISiteMetadataLink[];
}

export const Sides: React.FC<IComponentProps> = ({
	email,
	isLargeScreen,
	socials,
}) => {
	return (
		<Flex
			as="aside"
			flexDir="column"
			bottom="25%"
			{...(socials ? { left: setSize(2) } : { right: setSize(2) })}
			position="fixed"
		>
			{socials && (
				<Socials isLargeScreen={isLargeScreen} socials={socials} />
			)}
			{email && (
				<Link
					_hover={animatedLinkHover}
					css={{ writingMode: `vertical-rl` }}
					href={`mailto:${email}`}
					mb={setSize(1)}
					p={setSize(0.5)}
				>
					<Text
						fontFamily="Roboto Mono"
						letterSpacing="0.5px"
						lineHeight={1}
					>
						{email}
					</Text>
				</Link>
			)}
		</Flex>
	);
};

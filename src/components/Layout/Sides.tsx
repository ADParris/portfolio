import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import { ISiteMetadataLink } from '@data/models';
import { setSize } from '@utils';

import { AnimatedLink, Socials } from '@components';

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
				<AnimatedLink
					aria-label="email"
					css={{ writingMode: `vertical-rl` }}
					href={`mailto:${email}`}
					mb={setSize(1)}
					p={setSize(0.5)}
				>
					<Text
						fontFamily="Gruppo"
						fontSize="x-large"
						fontWeight="bold"
						letterSpacing="0.5px"
						lineHeight={1}
					>
						{email}
					</Text>
				</AnimatedLink>
			)}
		</Flex>
	);
};

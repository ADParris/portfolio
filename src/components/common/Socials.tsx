import React from 'react';

import { Flex, Icon } from '@chakra-ui/react';
import {
	FiCodepen,
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
} from 'react-icons/fi';

import { ISiteMetadataLink } from '@data/models';
import { setSize } from '@utils';

import { AnimatedLink } from '@components';

interface IComponentProps {
	isLargeScreen: boolean;
	socials: ISiteMetadataLink[];
}

export const Socials: React.FC<IComponentProps> = ({
	isLargeScreen,
	socials,
}) => {
	const setIcon = (site: string) =>
		site === `github`
			? FiGithub
			: site === `instagram`
			? FiInstagram
			: site === `twitter`
			? FiTwitter
			: site === `linkedin`
			? FiLinkedin
			: site === `codepen` && FiCodepen;

	return (
		<Flex
			flexDir={isLargeScreen ? `column` : `initial`}
			justifyContent={isLargeScreen ? 'initial' : 'space-evenly'}
			w="full"
		>
			{socials &&
				socials.map(link => {
					const icon = setIcon(link.site);

					return (
						<AnimatedLink
							aria-label={link.site}
							href={link.url}
							isExternal
							key={link.site}
							mb={isLargeScreen ? setSize(1) : 'initial'}
							p={setSize(0.5)}
						>
							{icon && <Icon as={icon} display="flex" />}
						</AnimatedLink>
					);
				})}
		</Flex>
	);
};

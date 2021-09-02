import React from 'react';

import { Flex, Icon, Link } from '@chakra-ui/react';
import {
	FiCodepen,
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
} from 'react-icons/fi';

import { animatedLinkHover } from '@data/constants';
import { ISiteMetadataLink } from '@data/models';
import { setSize } from '@utils';

interface IComponentProps {
	isLargeScreen: boolean;
	socials: ISiteMetadataLink[];
}

export const Socials: React.FC<IComponentProps> = ({
	isLargeScreen,
	socials,
}) => {
	const setIcon = (icon: string) =>
		icon === `FiGithub`
			? FiGithub
			: icon === `FiInstagram`
			? FiInstagram
			: icon === `FiTwitter`
			? FiTwitter
			: icon === `FiLinkedin`
			? FiLinkedin
			: icon === `FiCodepen` && FiCodepen;

	return (
		<Flex
			flexDir={isLargeScreen ? `column` : `initial`}
			justifyContent={isLargeScreen ? 'initial' : 'space-evenly'}
			w="full"
		>
			{socials &&
				socials.map(link => {
					const icon = setIcon(link.icon);

					return (
						<Link
							_hover={animatedLinkHover}
							href={link.url}
							isExternal
							key={link.icon}
							mb={isLargeScreen ? setSize(1) : 'initial'}
							p={setSize(0.5)}
						>
							{icon && <Icon as={icon} display="flex" />}
						</Link>
					);
				})}
		</Flex>
	);
};

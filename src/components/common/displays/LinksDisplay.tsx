import React from 'react';

import { Flex, Icon } from '@chakra-ui/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { setSize } from '@utils';

import { CustomLink } from '@components/common';

interface IComponentProps {
	alignment: string;
	link?: string;
	repo?: string;
}

export const LinksDisplay: React.FC<IComponentProps> = ({
	alignment,
	link,
	repo,
}) => {
	const linkConfig = {
		h: setSize(2),
		minW: 'auto',
		mr: setSize(0.5),
		p: setSize(0.25),
		rel: 'noopener noreferrer',
		target: '_blank',
		w: setSize(2),
	};

	return (
		<Flex justifyContent={alignment} ml={setSize(0.5)} mt={setSize(0.5)}>
			{repo && (
				<CustomLink link={repo} {...linkConfig}>
					<Icon as={FiGithub} />
				</CustomLink>
			)}
			{link && (
				<CustomLink link={link} {...linkConfig}>
					<Icon as={FiExternalLink} />
				</CustomLink>
			)}
		</Flex>
	);
};

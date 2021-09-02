import React from 'react';

import { Flex, Icon, Link } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize } from '@utils';

import { SiteLogo } from '@components';
import { Menu } from './Menu';

interface IComponentProps {
	isLargeScreen: boolean;
}

export const Header: React.FC<IComponentProps> = ({ isLargeScreen }) => (
	<Flex
		alignItems="center"
		as="header"
		flex={1}
		justifyContent="center"
		left={0}
		maxH={setSize(Sizes.headerMaxHeight)}
		mb={setSize(Sizes.gap)}
		position="sticky"
		top={0}
		w="full"
	>
		<Flex
			alignItems="center"
			flex={1}
			justifyContent="space-between"
			maxW={setSize(Sizes.maxWidth)}
		>
			<Link href="/">
				<Icon as={SiteLogo} h={setSize(1)} w={setSize(7.25)} />
			</Link>
			<Menu isLargeScreen={isLargeScreen} />
		</Flex>
	</Flex>
);

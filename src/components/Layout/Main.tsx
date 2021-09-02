import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize } from '@utils';

interface IComponentProps {}

export const Main: React.FC<IComponentProps> = ({ children }) => (
	<Flex as="main" flex={1} justifyContent="center" w="full">
		<Flex
			alignItems="center"
			flex={1}
			flexDir="column"
			justifyContent="center"
			maxW={setSize(Sizes.maxWidth)}
		>
			{children}
		</Flex>
	</Flex>
);

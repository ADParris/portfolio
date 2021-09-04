import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize } from '@utils';

interface IComponentProps {
	alignment: string;
	title: string;
}

export const TitleView: React.FC<IComponentProps> = ({
	alignment,
	title,
}) => {
	return (
		<Flex as="title" justifyContent={alignment}>
			<Text
				color="blue.400"
				fontFamily="Roboto Mono"
				fontSize="0.80em"
				mb={setSize(Sizes.gap)}
			>
				{title}
			</Text>
		</Flex>
	);
};

import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize, useColors } from '@utils';

interface IComponentProps {
	alignment: string;
	title: string;
}

export const TitleDisplay: React.FC<IComponentProps> = ({
	alignment,
	title,
}) => {
	const { normalHighlightColor } = useColors();

	return (
		<Flex as="title" justifyContent={alignment}>
			<Text
				color={normalHighlightColor}
				fontFamily="Roboto Mono"
				fontSize="0.80em"
				mb={setSize(Sizes.gap)}
			>
				{title}
			</Text>
		</Flex>
	);
};

import React from 'react';

import { Flex, useColorModeValue } from '@chakra-ui/react';

import { Colors, Sizes } from '@data/constants';
import { setSize, useBoxShadow, useHighlightColor } from '@utils';

interface IComponentProps {
	details: string;
	isLargeScreen: boolean;
}

export const DetailsDisplay: React.FC<IComponentProps> = ({
	details,
	isLargeScreen,
}) => {
	const { normalBoxShadow } = useBoxShadow();
	const bgColor = useColorModeValue(
		Colors.light.surfaceColor,
		Colors.dark.surfaceColor
	);
	const { hoverHighlightColor, normalHighlightColor } =
		useHighlightColor();

	return (
		<Flex
			__css={{
				'& a': { color: normalHighlightColor },
				'& a:hover': { color: hoverHighlightColor },
			}}
			bgColor={isLargeScreen ? bgColor : `initial`}
			borderRadius={setSize(Sizes.borderRadius / 2)}
			boxShadow={isLargeScreen ? normalBoxShadow : `none`}
			dangerouslySetInnerHTML={{ __html: details }}
			fontSize="0.90em"
			p={setSize(Sizes.gap)}
		/>
	);
};

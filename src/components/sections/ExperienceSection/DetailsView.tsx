import React from 'react';

import { Flex, useColorModeValue } from '@chakra-ui/react';

import { Colors, Sizes } from '@data/constants';
import { setSize } from '@utils';

interface IComponentProps {
	boxShadowColor: string;
	details: string;
	isLargeScreen: boolean;
}

export const DetailsView: React.FC<IComponentProps> = ({
	boxShadowColor,
	details,
	isLargeScreen,
}) => {
	const bgColor = useColorModeValue(
		Colors.light.surfaceColor,
		Colors.dark.surfaceColor
	);

	return (
		<Flex
			__css={{ '& a': { color: `green.500` } }}
			bgColor={isLargeScreen ? bgColor : `initial`}
			borderRadius={setSize(Sizes.borderRadius / 2)}
			boxShadow={
				isLargeScreen ? `10px 10px 15px -5px ${boxShadowColor}` : `none`
			}
			dangerouslySetInnerHTML={{ __html: details }}
			fontSize="0.90em"
			p={setSize(Sizes.gap)}
		/>
	);
};

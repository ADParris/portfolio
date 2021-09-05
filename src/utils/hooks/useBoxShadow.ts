import { useColorModeValue } from '@chakra-ui/react';

import { Colors, Sizes } from '@data/constants';

export const useBoxShadow = () => {
	const color = useColorModeValue(
		Colors.light.boxShadow,
		Colors.dark.boxShadow
	);

	const hoverBoxShadow = `${Sizes.boxShadow.hover} ${color}`;
	const normalBoxShadow = `${Sizes.boxShadow.normal} ${color}`;

	return { hoverBoxShadow, normalBoxShadow };
};

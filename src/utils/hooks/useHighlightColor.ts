import { useColorModeValue } from '@chakra-ui/color-mode';

import { Colors } from '@data/constants';

export const useHighlightColor = () => {
	const hoverHighlightColor = useColorModeValue(
		Colors.light.highlight.hover,
		Colors.dark.highlight.hover
	);

	const normalHighlightColor = useColorModeValue(
		Colors.light.highlight.normal,
		Colors.dark.highlight.normal
	);

	return { hoverHighlightColor, normalHighlightColor };
};

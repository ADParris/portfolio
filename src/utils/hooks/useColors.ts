import { useColorModeValue } from '@chakra-ui/color-mode';

import { Colors } from '@data/constants';

export const useColors = () => {
	const bgColor = useColorModeValue(
		Colors.light.bgColor,
		Colors.dark.bgColor
	);

	const hoverHighlightColor = useColorModeValue(
		Colors.light.highlight.hover,
		Colors.dark.highlight.hover
	);

	const normalHighlightColor = useColorModeValue(
		Colors.light.highlight.normal,
		Colors.dark.highlight.normal
	);

	const primaryTextColor = useColorModeValue(
		Colors.light.primaryTextColor,
		Colors.dark.primaryTextColor
	);

	const secondaryTextColor = useColorModeValue(
		Colors.light.secondaryTextColor,
		Colors.dark.secondaryTextColor
	);

	const surfaceColor = useColorModeValue(
		Colors.light.surfaceColor,
		Colors.dark.surfaceColor
	);

	return {
		bgColor,
		hoverHighlightColor,
		normalHighlightColor,
		primaryTextColor,
		secondaryTextColor,
		surfaceColor,
	};
};

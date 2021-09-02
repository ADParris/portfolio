import { useMediaQuery } from '@chakra-ui/react';
import { Sizes } from '@data/constants';

export const useScreenSizeCheck = () => {
	const isBrowser = typeof window !== undefined;
	const [isLargeScreen] = isBrowser
		? useMediaQuery(`(min-width: ${Sizes.breakPoint}px)`)
		: [true];

	return isLargeScreen;
};

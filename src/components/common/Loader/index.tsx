import React from 'react';

import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import { setSize } from '@utils';
import { Colors } from '@data/constants';

import { AnimatedSiteLogo } from './AnimatedSiteLogo';

interface IComponentProps {
	onAnimationComplete: () => void;
	isLargeScreen: boolean;
}

export const Loader: React.FC<IComponentProps> = ({
	onAnimationComplete,
	isLargeScreen,
}) => {
	const bgColor = useColorModeValue(
		Colors.light.bgColor,
		Colors.dark.bgColor
	);

	return (
		<AnimatePresence>
			<Flex
				alignItems="center"
				as={motion.div}
				bgColor={bgColor}
				flex={1}
				flexDir="column"
				w="full"
				zIndex={1}
				exit={{ opacity: 0 }}
			>
				<Icon
					as={() =>
						AnimatedSiteLogo({
							onAnimationComplete,
							isLargeScreen: isLargeScreen,
						})
					}
					h={setSize(isLargeScreen ? 3 : 1)}
					w={setSize(isLargeScreen ? 14 : 5)}
				/>
			</Flex>
		</AnimatePresence>
	);
};

import React from 'react';

import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { Colors, Sizes } from '@data/constants';
import { setSize, useScreenSizeCheck } from '@utils';

import { SectionContainer } from '../SectionContainer';

export const WorkSection: React.FC = () => {
	const isLargeScreen = useScreenSizeCheck();

	const bgColor = useColorModeValue(
		Colors.light.surfaceColor,
		Colors.dark.surfaceColor
	);

	const boxShadowColor = useColorModeValue(
		`rgba(0, 0, 0, 0.4)`,
		`rgba(255, 255, 255, 0.4)`
	);

	const variants = {
		initial: {},
		animate: {},
	};

	return (
		<SectionContainer
			heading="Things I've Made"
			section={{ id: `work`, count: 3 }}
			variants={variants}
		>
			<Flex
				alignItems="center"
				flexDir="column"
				mt={setSize(Sizes.gap * (isLargeScreen ? 3 : 1))}
			>
				<Flex
					bgColor={bgColor}
					borderRadius={setSize(Sizes.borderRadius / 2)}
					boxShadow={
						isLargeScreen
							? `10px 10px 15px -5px ${boxShadowColor}`
							: `none`
					}
					maxW={isLargeScreen ? `60%` : `100%`}
					p={setSize(Sizes.gap)}
				>
					<Text>
						During this journey, I have made several things that have never
						seen the light of day, as most of us do. Below are a few
						projects that have made it into the light, for the world to
						see.
					</Text>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

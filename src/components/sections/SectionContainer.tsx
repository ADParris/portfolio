import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import { Sizes } from '@data/constants';
import { setSize } from '@utils';

interface IComponentProps {
	heading?: string;
	isLargeScreen?: boolean;
	section: {
		count?: number;
		id: string;
	};
	variants: Variants;
}

export const SectionContainer: React.FC<IComponentProps> = ({
	heading,
	isLargeScreen,
	children,
	section,
	variants,
}) => {
	const after = {
		bgColor: `blue.400`,
		content: `''`,
		display: `block`,
		h: setSize(0.05),
		ml: setSize(0.5),
		position: `relative`,
		top: `-48%`,
		w: `full`,
	};
	const before = {
		color: `blue.400`,
		content: `'0${section!.count}.'`,
		display: `block`,
		fontFamily: `Roboto Mono`,
		fontSize: `0.85em`,
		mr: `5px`,
		position: `relative`,
	};

	return (
		<Flex
			as="section"
			flexDir="column"
			id={section.id}
			minH={`calc(${Sizes.sectionHeight} - ${setSize(
				Sizes.headerMaxHeight - 1.0
			)})`}
			w="full"
		>
			<Flex
				animate="animate"
				as={motion.div}
				flexDir="column"
				initial="initial"
				mt={setSize(5)}
				variants={variants}
			>
				{heading && (
					<Flex flex={1} mb={setSize(Sizes.gap)}>
						<Text
							_after={after}
							_before={before}
							alignItems="flex-end"
							as="h2"
							display="inline-flex"
							fontSize="1.5em"
							fontWeight="bold"
							lineHeight={0.75}
							w={isLargeScreen ? '50%' : 'full'}
							whiteSpace="nowrap"
						>
							{heading}
						</Text>
					</Flex>
				)}
				{children}
			</Flex>
		</Flex>
	);
};

import React from 'react';

import { Flex, Text, usePrefersReducedMotion } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

	const animationController = useAnimation();
	const { inView, ref: inViewRef } = useInView();
	const prefersReducedMotion = usePrefersReducedMotion();

	React.useEffect(() => {
		if (inView) {
			animationController.start({
				opacity: 1,
				transition: {
					delay: 0.5,
					duration: 1.5,
				},
				y: 0,
			});
		}
	}, [inView, animationController]);

	return (
		<Flex
			animate={animationController}
			as={motion.section}
			exit={{ opacity: 0 }}
			flexDir="column"
			id={section.id}
			initial={{ opacity: 0, y: prefersReducedMotion ? 0 : setSize(1) }}
			minH={`calc(${Sizes.sectionHeight} - ${setSize(
				Sizes.headerMaxHeight + Sizes.gap
			)})`}
			mt={setSize(1.5)}
			ref={inViewRef}
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

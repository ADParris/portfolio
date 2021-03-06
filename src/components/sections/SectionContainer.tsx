import React from 'react';

import { Flex, Text, usePrefersReducedMotion } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Sizes } from '@data/constants';
import { setSize, useColors } from '@utils';

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
	const { normalHighlightColor } = useColors();

	const after = {
		bgColor: normalHighlightColor,
		content: `''`,
		display: `block`,
		h: setSize(0.025),
		ml: setSize(0.5),
		position: `relative`,
		top: `-48%`,
		w: `full`,
	};
	const before = {
		color: normalHighlightColor,
		content: `'0${section!.count}.'`,
		display: `block`,
		fontFamily: `Gruppo`,
		fontSize: `0.85em`,
		mb: setSize(0.065),
		mr: setSize(0.25),
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
			minH="100vh"
			mt={setSize(Sizes.headerHeight + Sizes.gap)}
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
							w="full"
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

import React from 'react';

import { Text, useColorModeValue } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';

import { Colors, Sizes } from '@data/constants';
import { setSize } from '@utils';

import { SectionContainer } from './SectionContainer';

interface IComponentProps {
	name: string;
}

export const HeroSection: React.FC<IComponentProps> = ({ name }) => {
	const supTitleTextColor = useColorModeValue(`blue.600`, `blue.400`);
	const subTitleTextColor = useColorModeValue(
		Colors.light.secondaryTextColor,
		Colors.dark.secondaryTextColor
	);
	const shouldReduceMotion = useReducedMotion();

	const variants = {
		initial: { opacity: 0, y: shouldReduceMotion ? 0 : '50px' },
		animate: {
			opacity: 1,
			transition: { duration: 1, ease: 'easeInOut', staggerChildren: 1 },
			y: 0,
		},
	};

	return (
		<SectionContainer section={{ id: `top` }} variants={variants}>
			<Text as={motion.p} color={supTitleTextColor} variants={variants}>
				Hi, my name is
			</Text>
			<Text
				as={motion.p}
				fontSize="clamp(40px, 10vw, 80px)"
				fontWeight="bold"
				lineHeight={1.2}
				variants={variants}
			>
				{`${name}.`}
			</Text>
			<Text
				as={motion.p}
				color={subTitleTextColor}
				fontSize="clamp(20px, 10vw, 40px)"
				fontWeight="bold"
				lineHeight={1.2}
				variants={variants}
			>
				I build things that live on the web.
			</Text>
			<Text
				as={motion.p}
				maxW="600px"
				mt={setSize(Sizes.gap)}
				variants={variants}
			>
				I'm a software engineer specializing in creating exceptional
				experiences on the web. My current focus is looking for the right
				company to begin my career.
			</Text>
		</SectionContainer>
	);
};

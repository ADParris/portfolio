import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';

import { Sizes } from '@data/constants';
import { setSize, useColors } from '@utils';

import { CustomButton } from '@components/common';
import { SectionContainer } from './SectionContainer';

interface IComponentProps {
	name: string;
}

const handleContactClick = () => window.open('mailto:andrew@adparris.com');

export const HeroSection: React.FC<IComponentProps> = ({ name }) => {
	const { normalHighlightColor, secondaryTextColor } = useColors();

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
			<Text as={motion.p} color={normalHighlightColor} variants={variants}>
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
				color={secondaryTextColor}
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
				I'm a self-taught software developer looking for the right company
				to begin my career, creating exceptional experiences on the web.
			</Text>
			<Flex
				as={motion.div}
				justifyContent="center"
				mt={setSize(Sizes.gap)}
				variants={variants}
			>
				<CustomButton onClick={handleContactClick}>
					<Text>Get In Touch</Text>
				</CustomButton>
			</Flex>
		</SectionContainer>
	);
};

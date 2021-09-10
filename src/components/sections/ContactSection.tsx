import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize, useScreenSizeCheck } from '@utils';

import { CustomButton } from '@components/common';
import { SectionContainer } from './SectionContainer';

export const ContactSection: React.FC = () => {
	const isLargeScreen = useScreenSizeCheck();

	const variants = {
		initial: {},
		animate: {},
	};

	const handleContactClick = () =>
		window.open('mailto:andrew@adparris.com');

	return (
		<SectionContainer
			heading="Get In Touch"
			section={{ id: `contact`, count: 4 }}
			variants={variants}
		>
			<Flex justifyContent="center">
				<Flex flexDir="column" maxW={isLargeScreen ? '60%' : '100%'}>
					<Text my={setSize(Sizes.gap * 1.5)}>
						Whether you have an opportunity that you wish to discuss with
						me, have a question, or want to say hi, my inbox is always
						open. Drop me a message, and I'll do my best to get back to
						you!
					</Text>
					<Flex flex={1} justifyContent="center">
						<CustomButton onClick={handleContactClick}>
							<Text>Say Hello</Text>
						</CustomButton>
					</Flex>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

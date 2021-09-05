import React from 'react';

import { Button, Flex, Link, Text } from '@chakra-ui/react';

import { Colors, Sizes } from '@data/constants';
import { setSize, useHighlightColor, useScreenSizeCheck } from '@utils';

import { SectionContainer } from './SectionContainer';

export const ContactSection: React.FC = () => {
	const { hoverHighlightColor, normalHighlightColor } =
		useHighlightColor();
	const isLargeScreen = useScreenSizeCheck();

	const variants = {
		initial: {},
		animate: {},
	};

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
						<Button
							_hover={{
								bgColor: hoverHighlightColor,
								color: Colors.dark.primaryTextColor,
							}}
							as={Link}
							borderColor={normalHighlightColor}
							color={normalHighlightColor}
							href="mailto:andrew@adparris.com"
							variant="outline"
							w="fit-content"
						>
							<Text>Say Hello</Text>
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

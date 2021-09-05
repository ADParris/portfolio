import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

import { Sizes } from '@data/constants';
import { setSize, useScreenSizeCheck } from '@utils';

import { SectionContainer } from './SectionContainer';

export const AboutSection: React.FC = () => {
	const isLargeScreen = useScreenSizeCheck();

	const afterImage = {
		border: `2px solid`,
		borderRadius: setSize(Sizes.borderRadius),
		content: `''`,
		display: `block`,
		h: setSize(15),
		position: `absolute`,
		right: `-${setSize(0.75)}`,
		top: setSize(0.75),
		transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
		w: setSize(15),
		zIndex: -1,
	};

	const Image = () => (
		<Flex
			flex={0.75}
			justifyContent="center"
			mb={setSize(Sizes.gap * 1.5)}
		>
			<Flex
				_after={afterImage}
				h={setSize(15)}
				position="relative"
				w={setSize(15)}
			>
				<Flex borderRadius={setSize(Sizes.borderRadius)} overflow="hidden">
					<StaticImage
						alt="Andrew Parris"
						height={300}
						src="../../data/images/me.jpg"
						width={300}
					/>
				</Flex>
			</Flex>
		</Flex>
	);

	const variants = {
		initial: {},
		animate: {},
	};

	return (
		<SectionContainer
			heading="About Me"
			isLargeScreen={isLargeScreen}
			section={{ id: `about`, count: 1 }}
			variants={variants}
		>
			<Flex>
				<Flex flex={1.25} flexDir="column">
					{!isLargeScreen && Image()}
					<Text mb={setSize(Sizes.gap / 2)}>
						Hello! My name is Andrew, and I love building things that live
						on the web.
					</Text>
					<Text mb={setSize(Sizes.gap / 2)}>
						My interest in computers started when I received my first
						Commodore VIC-20, around the age of 9. A few years later, I
						discovered the bulletin boards when I received my first modem,
						all 300 baud of it.
					</Text>
					<Text mb={setSize(Sizes.gap / 2)}>
						My interest in web development started when I realized that I
						was more interested in creating the experience rather than
						using it. A few years later, with the help of a friend, we did
						just that. We had made our first online site, a bulletin board!
					</Text>
				</Flex>
				{isLargeScreen && Image()}
			</Flex>
			<Text mb={setSize(Sizes.gap / 2)}>
				Several years later, I remember making a website with just HTML,
				CSS, and a bit of JQuery. Sure, it was simple by today's standards
				but it was thrilling to think that people from around the world
				could see what I had created!
			</Text>
			<Text mb={setSize(Sizes.gap / 2)}>
				Fast-forwarding to today, and I have gone all-in on what I love to
				do. For the past two years, I have been learning several libraries
				and frameworks. Frameworks such as Express to build REST APIs,
				Apollo to build GraphQL APIs, and libraries such as React to build
				the front-end.
			</Text>
		</SectionContainer>
	);
};

import '@fontsource/nunito';
import '@fontsource/gruppo';

import React from 'react';

import { ChakraProvider, ColorModeScript, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { customTheme, Sizes } from '@data/constants';
import { ISiteMetadataLink } from '@data/models';
import { setSize, useScreenSizeCheck } from '@utils';

import { Head, Loader } from '@components';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Sides } from './Sides';

interface IComponentProps {
	description: string;
	email: string;
	isHome: boolean;
	socials: ISiteMetadataLink[];
	title: string;
}

export const Layout: React.FC<IComponentProps> = ({
	children,
	description,
	email,
	isHome,
	socials,
	title,
}) => {
	const [animationComplete, setAnimationComplete] = React.useState(
		!isHome
	);
	const isLargeScreen = useScreenSizeCheck();

	const onAnimationComplete = () => setAnimationComplete(true);

	return (
		<>
			<Head description={description} title={title} />
			<ChakraProvider theme={customTheme}>
				<ColorModeScript initialColorMode="system" />
				{!animationComplete ? (
					<Loader
						isLargeScreen={isLargeScreen}
						onAnimationComplete={onAnimationComplete}
					/>
				) : (
					<Flex
						as={motion.div}
						flex={1}
						justifyContent="center"
						minH="100vh"
						mx={isLargeScreen ? 0 : setSize(Sizes.gap)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: `easeIn` }}
					>
						{isHome && isLargeScreen && (
							<Sides isLargeScreen={isLargeScreen} socials={socials} />
						)}
						<Flex
							flex={1}
							flexDir="column"
							maxW={setSize(Sizes.maxWidth)}
							w="full"
						>
							<Header isLargeScreen={isLargeScreen} />
							<Main>{children}</Main>
							{isHome && (
								<Footer isLargeScreen={isLargeScreen} socials={socials} />
							)}
						</Flex>
						{isHome && isLargeScreen && (
							<Sides email={email} isLargeScreen={isLargeScreen} />
						)}
					</Flex>
				)}
			</ChakraProvider>
		</>
	);
};

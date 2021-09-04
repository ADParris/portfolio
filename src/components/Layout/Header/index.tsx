import React from 'react';

import {
	Flex,
	Icon,
	Link,
	useColorModeValue,
	usePrefersReducedMotion,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

import { Colors, Sizes } from '@data/constants';
import { setSize } from '@utils';

import { SiteLogo } from '@components';
import { Menu } from './Menu';

interface IComponentProps {
	isLargeScreen: boolean;
}

export const Header: React.FC<IComponentProps> = ({ isLargeScreen }) => {
	const [scrollYPos, setScrollYPos] = React.useState(0);
	const prevScrollYPos = React.useRef(0);

	const animationController = useAnimation();
	const bgColor = useColorModeValue(
		Colors.light.bgColor,
		Colors.dark.bgColor
	);
	const prefersReducedMotion = usePrefersReducedMotion();

	const handleScroll = () => setScrollYPos(window.pageYOffset);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	React.useEffect(() => {
		if (scrollYPos < 50 || scrollYPos < prevScrollYPos.current) {
			animationController.start({
				height: setSize(Sizes.headerHeight),
				opacity: 1,
				overflow: `visible`,
				transition: { delay: 0, duration: 0.05 },
			});
		} else {
			animationController.start({
				height: prefersReducedMotion ? setSize(Sizes.headerHeight) : 0,
				opacity: 0,
				overflow: `hidden`,
				transition: { delay: 0, duration: 0.05 },
			});
		}
		prevScrollYPos.current = scrollYPos;
	}, [prevScrollYPos, scrollYPos]);

	return (
		<Flex
			alignItems="center"
			animate={animationController}
			as={motion.header}
			bgColor={bgColor}
			flex={1}
			initial={{ top: 0 }}
			justifyContent="center"
			left={0}
			position="fixed"
			top={0}
			w="full"
			zIndex={1}
		>
			<Flex
				alignItems="center"
				as="nav"
				flex={1}
				justifyContent="space-between"
				px={setSize(2.5)}
			>
				<Link href="/" p={setSize(Sizes.gap / 2)}>
					<Icon as={SiteLogo} h={setSize(1.25)} w={setSize(8)} />
				</Link>
				<Menu isLargeScreen={isLargeScreen} />
			</Flex>
		</Flex>
	);
};

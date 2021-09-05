import React from 'react';

import {
	Divider,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	useDisclosure,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { FiMenu } from 'react-icons/fi';

import { Sizes } from '@data/constants';
import { setSize, useHighlightColor } from '@utils';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavLink } from './NavLink';
import { SiteLogo } from '../../../common';

interface IComponentProps {
	isLargeScreen: boolean;
}

export const Menu: React.FC<IComponentProps> = ({ isLargeScreen }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { normalHighlightColor } = useHighlightColor();
	const {
		site: {
			meta: { navLinks },
		},
	} = useStaticQuery(query);
	const btnRef = React.useRef<HTMLButtonElement>(null);

	const _buildNavLinks = () =>
		navLinks.map((link: string, index: number) => (
			<NavLink
				count={index + 1}
				key={`${link}-link`}
				handleClose={onClose}
				link={link}
			/>
		));

	return isLargeScreen ? (
		<Flex alignItems="center">
			{_buildNavLinks()}
			<ColorModeSwitcher />
		</Flex>
	) : (
		<Flex>
			<IconButton
				_hover={{ background: 'whiteAlpha.200' }}
				aria-label="site menu"
				bgColor="transparent"
				h={setSize(2)}
				icon={<Icon as={FiMenu} />}
				minW="auto"
				onClick={onOpen}
				ref={btnRef}
				w={setSize(2)}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size="sm" />
					<Flex
						alignItems="center"
						as="header"
						display="flex"
						h={setSize(6)}
						justifyContent="center"
					>
						<Icon
							as={SiteLogo}
							color={normalHighlightColor}
							h={setSize(2)}
							w={setSize(10)}
						/>
					</Flex>

					<Flex
						alignItems="flex-start"
						as="main"
						flex={1}
						flexDir="column"
						px={setSize(Sizes.gap)}
					>
						{_buildNavLinks()}
						<Divider my={setSize(Sizes.gap / 2)} />
						<ColorModeSwitcher handleClose={onClose} />
					</Flex>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

const query = graphql`
	{
		site {
			meta: siteMetadata {
				navLinks
				title
			}
		}
	}
`;

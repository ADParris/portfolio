import React from 'react';

import {
	Icon,
	IconButton,
	Button,
	Text,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { Colors, Sizes } from '@data/constants';
import { setSize } from '../../../../utils';

interface IComponentProps {
	handleClose?: () => void;
}

export const ColorModeSwitcher: React.FC<IComponentProps> = ({
	handleClose,
}) => {
	const { toggleColorMode } = useColorMode();
	const color = useColorModeValue(
		Colors.light.primaryTextColor,
		Colors.dark.primaryTextColor
	);
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	const handleToggleAndClose = () => {
		toggleColorMode();
		handleClose && handleClose();
	};

	return handleClose ? (
		<Button
			aria-label={`switch to ${text} mode`}
			leftIcon={<Icon as={SwitchIcon} />}
			onClick={handleToggleAndClose}
			m={setSize(Sizes.gap / 2)}
			p={0}
			variant="ghost"
		>
			<Text
				fontWeight="normal"
				lineHeight={1}
				textTransform="capitalize"
			>{`${text} mode`}</Text>
		</Button>
	) : (
		<IconButton
			aria-label={`switch to ${text} mode`}
			color={color}
			fontSize="md"
			minH={setSize(2)}
			icon={<SwitchIcon />}
			onClick={toggleColorMode}
			size="sm"
			variant="link"
		/>
	);
};

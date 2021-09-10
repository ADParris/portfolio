import React from 'react';

import { Button, ButtonProps, Flex } from '@chakra-ui/react';
import { useColors } from '../../utils';

interface IComponentProps extends ButtonProps {
	onClick?: () => void;
}

export const CustomButton: React.FC<IComponentProps> = ({
	children,
	onClick,
	...buttonProps
}) => {
	const { normalHighlightColor, hoverHighlightColor } = useColors();

	return (
		<Button
			_hover={{ bgColor: hoverHighlightColor }}
			borderColor={normalHighlightColor}
			color={normalHighlightColor}
			onClick={onClick}
			role="group"
			variant="outline"
			w="fit-content"
			{...buttonProps}
		>
			<Flex _groupHover={{ color: 'white' }}>{children}</Flex>
		</Button>
	);
};

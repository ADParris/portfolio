import React from 'react';

import { Link, Text } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize } from '@utils';

interface IComponentProps {
	count: number;
	handleClose: () => void;
	link: string;
}

export const NavLink: React.FC<IComponentProps> = ({
	count,
	handleClose,
	link,
}) => {
	const after = {
		bgColor: `blue.600`,
		bottom: `-0.37em`,
		borderRadius: `3px`,
		content: `''`,
		display: `block`,
		h: `3px`,
		position: `relative`,
		transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
		w: 0,
	};

	const before = {
		color: `blue.400`,
		content: `'0${count}.'`,
		fontSize: `0.85em`,
		mr: setSize(0.25),
	};

	const hover = {
		_after: {
			w: 'full',
		},
	};

	return (
		<Text
			_after={after}
			_before={before}
			_hover={hover}
			fontFamily="Roboto Mono"
			fontWeight="normal"
			fontSize="0.85em"
			lineHeight={1}
			mr={setSize(Sizes.gap / 2)}
			p={setSize(Sizes.gap / 2)}
			onClick={handleClose}
			textTransform="capitalize"
		>
			<Link
				_hover={{ color: `inherit` }}
				href={`/#${link}`}
				variant="ghost"
			>
				{link}
			</Link>
		</Text>
	);
};

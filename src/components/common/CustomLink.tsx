import React from 'react';

import { Link, LinkProps } from '@chakra-ui/react';

import { useColors } from '@utils';

interface IComponentProps extends LinkProps {
	link?: string;
}

export const CustomLink: React.FC<IComponentProps> = ({
	children,
	link,
	...linkProps
}) => {
	const { normalHighlightColor, hoverHighlightColor } = useColors();

	return (
		<Link
			_hover={{ color: hoverHighlightColor }}
			color={normalHighlightColor}
			href={link}
			isExternal
			{...linkProps}
		>
			{children}
		</Link>
	);
};

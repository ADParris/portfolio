import React from 'react';

import { Link, LinkProps } from '@chakra-ui/react';

import { setSize, useColors } from '@utils';

export const AnimatedLink: React.FC<LinkProps> = ({
	children,
	...linkProps
}) => {
	const { hoverHighlightColor } = useColors();

	const _hover = {
		color: hoverHighlightColor,
		transform: `translateY(-${setSize(0.15)})`,
		translate: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
	};

	return (
		<Link _hover={_hover} {...linkProps}>
			{children}
		</Link>
	);
};

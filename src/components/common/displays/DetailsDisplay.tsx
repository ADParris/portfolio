import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Sizes } from '@data/constants';
import { setSize, useBoxShadow, useColors } from '@utils';

import { NoteDisplay } from './NoteDisplay';

interface IComponentProps {
	details: string;
	isLargeScreen: boolean;
	note?: string | null;
	title?: string;
}

export const DetailsDisplay: React.FC<IComponentProps> = ({
	details,
	isLargeScreen,
	note,
	title,
}) => {
	const { normalBoxShadow } = useBoxShadow();
	const { hoverHighlightColor, normalHighlightColor, surfaceColor } =
		useColors();

	return (
		<Flex
			alignItems="flex-end"
			bgColor={isLargeScreen ? surfaceColor : `initial`}
			borderRadius={setSize(Sizes.borderRadius / 2)}
			boxShadow={isLargeScreen ? normalBoxShadow : `none`}
			flexDir="column"
			p={setSize(Sizes.gap)}
		>
			<Flex
				__css={{
					'& a': { color: normalHighlightColor },
					'& a:hover': { color: hoverHighlightColor },
				}}
				dangerouslySetInnerHTML={{ __html: details }}
				fontSize="0.90em"
			/>
			{note && <NoteDisplay note={note} title={title!} />}
		</Flex>
	);
};

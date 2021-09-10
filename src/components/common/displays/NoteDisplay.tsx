import React from 'react';

import {
	Flex,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from '@chakra-ui/react';

import { setSize } from '@utils';

import { CustomLink } from '@components/common';

interface IComponentProps {
	note: string;
	title: string;
}

export const NoteDisplay: React.FC<IComponentProps> = ({
	note,
	title,
}) => {
	const initialFocusRef = React.useRef<HTMLDivElement>(null);

	return (
		<Popover initialFocusRef={initialFocusRef} placement="top-end">
			<PopoverTrigger>
				<Flex as="button" mt={setSize(0.25)} w="fit-content">
					<CustomLink fontStyle="italic">note</CustomLink>
				</Flex>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<Flex ref={initialFocusRef}>
					<PopoverCloseButton />
				</Flex>
				<PopoverHeader>{`A note about ${title}`}</PopoverHeader>
				<PopoverBody>{note}</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

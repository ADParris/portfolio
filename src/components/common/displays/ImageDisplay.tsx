import React from 'react';

import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Sizes } from '@data/constants';
import { setSize, useBoxShadow, useHighlightColor } from '@utils';

interface IComponentProps {
	image: IGatsbyImageData;
	isLargeScreen: boolean;
	leftAlignedImage: boolean;
	title: string;
}

export const ImageDisplay: React.FC<IComponentProps> = ({
	image,
	isLargeScreen,
	leftAlignedImage,
	title,
}) => {
	const { hoverBoxShadow, normalBoxShadow } = useBoxShadow();
	const { normalHighlightColor } = useHighlightColor();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex justifyContent={leftAlignedImage ? `flex-end` : `flex-start`}>
			<Flex
				_hover={{ boxShadow: hoverBoxShadow }}
				boxShadow={isLargeScreen ? normalBoxShadow : `none`}
				cursor="pointer"
				maxW={isLargeScreen ? '49%' : '100%'}
				onClick={onOpen}
				transition="box-shadow 0.3s ease-in-out"
				w="full"
			>
				<GatsbyImage alt={title} image={image} style={{ width: '100%' }} />
			</Flex>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW={setSize(50)}>
					<ModalHeader
						alignItems="center"
						display="inline-flex"
						justifyContent="space-between"
						p={setSize(Sizes.gap / 1.5)}
					>
						<Text
							color={normalHighlightColor}
							fontFamily="Roboto Mono"
							lineHeight={1.1}
							pb={setSize(0.24)}
							style={{ wordSpacing: `-${setSize(0.5)}` }}
						>
							{title}
						</Text>
						<ModalCloseButton position="unset" />
					</ModalHeader>
					<ModalBody p={0}>
						<GatsbyImage alt={title} image={image} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

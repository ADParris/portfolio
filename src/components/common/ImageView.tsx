import React from 'react';

import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface IComponentProps {
	boxShadowColor: string;
	image: IGatsbyImageData;
	title: string;
}

export const ImageView: React.FC<IComponentProps> = ({
	boxShadowColor,
	image,
	title,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				boxShadow={`10px 10px 15px -5px ${boxShadowColor}`}
				maxW="50%"
				onClick={onOpen}
				w="full"
			>
				<GatsbyImage alt={title} image={image} />
			</Flex>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<GatsbyImage alt={title} image={image} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

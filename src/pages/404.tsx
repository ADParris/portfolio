import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

interface IPageProps {}

const NotFoundPage: React.FC<IPageProps> = () => {
	return (
		<Flex>
			<Text>404 | Page Not Found</Text>
		</Flex>
	);
};

export default NotFoundPage;

import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';

import { ISiteMetadata } from '@data/models';

import { Layout } from '@components';

interface IPageProps {
	data: ISiteMetadata;
	location: { pathname: string };
}

const NotFoundPage: React.FC<IPageProps> = ({
	data: {
		site: {
			meta: { description, email, socials, title },
		},
	},
	location: { pathname },
}) => {
	return (
		<Layout
			description={description}
			email={email}
			isHome={pathname === '/'}
			socials={socials}
			title={`${title} | 404`}
		>
			<Flex>
				<Text fontFamily="Roboto Mono" fontSize="xx-large">
					404 | Page Not Found
				</Text>
			</Flex>
		</Layout>
	);
};

export const query = graphql`
	{
		site {
			meta: siteMetadata {
				description
				email
				title
				socials {
					site
					url
				}
			}
		}
	}
`;

export default NotFoundPage;

import React from 'react';

import { graphql } from 'gatsby';

import { ISiteMetadata } from '@data/models';

import {
	AboutSection,
	ContactSection,
	ExperienceSection,
	HeroSection,
	Layout,
} from '@components';

interface IPageProps {
	data: ISiteMetadata;
}

const HomePage: React.FC<IPageProps> = ({
	data: {
		site: {
			meta: { author, description, email, socials, title },
		},
	},
}) => {
	return (
		<Layout
			description={description}
			email={email}
			socials={socials}
			title={`${title} | Home`}
		>
			<HeroSection name={author} />
			<AboutSection />
			<ExperienceSection />
			<ContactSection />
		</Layout>
	);
};

export const query = graphql`
	{
		site {
			meta: siteMetadata {
				author
				description
				email
				title
				socials {
					icon
					url
				}
			}
		}
	}
`;

export default HomePage;

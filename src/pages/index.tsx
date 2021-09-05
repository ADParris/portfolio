import React from 'react';

import { graphql } from 'gatsby';

import { ISiteMetadata } from '@data/models';

import {
	AboutSection,
	ContactSection,
	ExperienceSection,
	HeroSection,
	Layout,
	WorkSection,
} from '@components';

interface IPageProps {
	data: ISiteMetadata;
	location: { pathname: string };
}

const HomePage: React.FC<IPageProps> = ({
	data: {
		site: {
			meta: { author, description, email, socials, title },
		},
	},
	location: { pathname },
}) => (
	<Layout
		description={description}
		email={email}
		isHome={pathname === `/`}
		socials={socials}
		title={`${title} | Home`}
	>
		<HeroSection name={author} />
		<AboutSection />
		<ExperienceSection />
		<WorkSection />
		<ContactSection />
	</Layout>
);

export const query = graphql`
	{
		site {
			meta: siteMetadata {
				author
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

export default HomePage;

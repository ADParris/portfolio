module.exports = {
	plugins: [
		{
			resolve: `@chakra-ui/gatsby-plugin`,
			options: {
				resetCSS: true,
				isUsingColorMode: true,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							rel: `nofollow noopener noreferrer`,
							target: `_blank`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							linkImagesToOriginal: true,
							maxWidth: 700,
							quality: 90,
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
	],
	siteMetadata: {
		author: `Andrew Parris`,
		description: `Andrew Parris is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.`,
		email: `andrew@adparris.com`,
		navLinks: [`about`, `experience`, `work`, `contact`],
		repo: `https://github.com/ADParris/portfolio`,
		socials: [
			{
				site: `github`,
				url: `https://github.com/ADParris`,
			},
			{
				site: `instagram`,
				url: `https://www.instagram.com/andrew.parris/`,
			},
			{
				site: `twitter`,
				url: `https://twitter.com/ADParris`,
			},
			{
				site: `linkedin`,
				url: `https://www.linkedin.com/in/adparris/`,
			},
			{
				site: `codepen`,
				url: `https://codepen.io/ADParris`,
			},
		],
		title: `ADParris`,
		url: `https://adparris.com`,
	},
};

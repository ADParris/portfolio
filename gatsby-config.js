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
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							target: `_blank`,
							rel: `nofollow noopener noreferrer`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 450,
							linkImagesToOriginal: true,
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
				icon: `FiGithub`,
				url: `https://github.com/ADParris`,
			},
			{
				icon: `FiInstagram`,
				url: `https://www.instagram.com/andrew.parris/`,
			},
			{
				icon: `FiTwitter`,
				url: `https://twitter.com/ADParris`,
			},
			{
				icon: `FiLinkedin`,
				url: `https://www.linkedin.com/in/adparris/`,
			},
			{
				icon: `FiCodepen`,
				url: `https://codepen.io/ADParris`,
			},
		],
		title: `ADParris`,
		url: `https://adparris.com`,
	},
};

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

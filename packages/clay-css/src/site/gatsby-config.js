module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Blog`,
		author: {
			name: `Kyle Mathews`,
			summary: `who lives and works in San Francisco building useful things.`,
		},
		description: `A starter blog demonstrating what Gatsby can do.`,
		siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
		social: {
			twitter: `kylemathews`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`,
			},
		},
		{
			resolve: `gatsby-transformer-rehype`
		},
		{
			resolve: `gatsby-transformer-remark`,
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/site-images/liferay_logo_tagline.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
	],
};

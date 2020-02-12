/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {readFileSync} = require('fs');
const {resolve} = require('path');

// This is a copy of https://github.com/reactjs/reactjs.org/tree/master/plugins/gatsby-transformer-authors-yaml
exports.sourceNodes = ({actions}) => {
	const {createNode} = actions;

	const authors = require(resolve(__dirname, '../../content/authors.json'));

	console.log(authors);

	// authors.yml structure is {[username: string]: {name: string, url: string}}
	Object.keys(authors).forEach(username => {
		const author = authors[username];

		createNode({
			children: [],
			frontmatter: author,
			id: username,
			internal: {
				contentDigest: JSON.stringify(author),
				type: 'AuthorYaml',
			},
			parent: 'AUTHORS',
		});
	});
};

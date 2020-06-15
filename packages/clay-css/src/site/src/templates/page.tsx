// @ts-nocheck
import React from 'react';
import {Link, graphql} from 'gatsby';

import '../styles/site-atlas-font-awesome.scss';
import '../styles/site-main.scss';

const PageTemplate = ({data, pageContext, location}) => {
	const post = data.htmlRehype;

	const sections = data.allHtmlRehype.edges.reduce((acc, edge) => {
		if (!Array.isArray(acc[edge.node.fields.section])) {
			acc[edge.node.fields.section] = [];
		}

		acc[edge.node.fields.section].push({
			title: edge.node.fields.title,
			url: edge.node.fields.slug,
		});

		return acc;
	}, {});

	return (
		<>
			<nav className="" id="mainNav">
				<div className="main-nav-inner">
					<ul className="nav flex-column main-nav-section">
						{Object.keys(sections)
							.sort()
							.map((section) => {
								const items = sections[section];

								return (
									<li key={section}>
										{!items && (
											<Link className="nav-title" to="/">
												{section}
											</Link>
										)}

										{items && (
											<>
												<span className="nav-title">
													{section}
												</span>
												<div>
													<ul className="nav flex-column main-nav-section">
														{items
															.sort((a, b) => {
																if (
																	a.title <
																	b.title
																) {
																	return -1;
																}
																if (
																	a.title >
																	b.title
																) {
																	return 1;
																}
																return 0;
															})
															.map(
																({
																	title,
																	url,
																}) => (
																	<li
																		key={
																			title
																		}
																	>
																		<Link
																			className="nav-title"
																			to={
																				url
																			}
																		>
																			{
																				title
																			}
																		</Link>
																	</li>
																)
															)}
													</ul>
												</div>
											</>
										)}
									</li>
								);
							})}
					</ul>
				</div>
			</nav>

			<div id="mainContent">
				<h1 className="page-title mt-5" id="beginContent" tabIndex={-1}>
					{post.fields.title}
				</h1>

				<div dangerouslySetInnerHTML={{__html: post.html}} />
			</div>
		</>
	);
};

export default PageTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		allHtmlRehype {
			edges {
				node {
					fields {
						slug
						section
						title
					}
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
		htmlRehype(fields: {slug: {eq: $slug}}) {
			id
			html
			fields {
				section
				slug
				title
			}
		}
	}
`;

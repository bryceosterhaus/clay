/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export default (props: any) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>Clay - {props.title}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				{props.headComponents}

				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
				{/* <script src="<%= rootPath %>/js/popper.js"></script>
				<script src="<%= rootPath %>/js/bootstrap.js"></script>
				<script src="<%= rootPath %>/js/collapsible-search.js"></script>
				<script src="<%= rootPath %>/js/side-navigation.js"></script> */}
			</head>

			<body {...props.bodyAttributes}>
				<div id="wrapper">
					<header className="row" id="headerTopBar">
						<div className="container-fluid">
							<a
								className="btn btn-primary"
								href="#beginContent"
								id="skipTo"
							>
								Skip to Content
							</a>

							<button
								className="animated-toggle btn btn-primary d-md-none hidden-sm-up"
								id="claySiteMobileNavigationToggle"
								type="button"
							>
								<span className="docs-icon-bar docs-icon-bar-1"></span>
								<span className="docs-icon-bar docs-icon-bar-2"></span>
								<span className="docs-icon-bar docs-icon-bar-3"></span>
							</button>

							<h4 className="title">
								<a href="<%= rootPath %>/..">Clay CSS</a>{' '}
								<span className="label label-primary lexicon-version">
									v{props.version}
								</span>
							</h4>

							<button
								className="btn btn-primary btn-sm d-sm-none d-md-block"
								data-nav-hidden="false"
								id="siteNavToggle"
								type="button"
							>
								Hide Nav
							</button>

							<div className="dropdown" id="siteConfig">
								<button
									className="btn btn-primary btn-sm"
									data-toggle="dropdown"
								>
									<svg
										aria-hidden="true"
										className="lexicon-icon lexicon-icon-cog"
									>
										<use xlinkHref="<%= rootPath %>/images/icons/icons.svg#cog"></use>
									</svg>
								</button>
								<div className="dropdown-menu dropdown-menu-right">
									<div className="dropdown-header">
										Site Settings
									</div>
									<form>
										<div className="dropdown-item">
											<div className="custom-control custom-checkbox">
												<label>
													<input
														checked
														className="custom-control-input"
														id="toggleAtlas"
														type="checkbox"
													/>
													<span className="custom-control-label">
														<span className="custom-control-label-text">
															Show Atlas
														</span>
													</span>
												</label>
											</div>
										</div>
										<div className="dropdown-item">
											<div className="custom-control custom-checkbox">
												<label>
													<input
														checked
														className="custom-control-input"
														id="toggleSiteCss"
														type="checkbox"
													/>
													<span className="custom-control-label">
														<span className="custom-control-label-text">
															Show Site CSS
														</span>
													</span>
												</label>
											</div>
										</div>

										<div className="dropdown-section">
											<button
												className="btn btn-secondary btn-block"
												id="resetSiteConfig"
											>
												Reset Settings
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</header>

					<section className="container-fluid main-nav-container">
						<div
							dangerouslySetInnerHTML={{__html: props.body}}
							id="___gatsby"
						/>
					</section>
				</div>

				{props.postBodyComponents}

				{/* <script src="<%= rootPath %>/js/site/toggle_css.js"></script>
				<script
					src="<%= rootPath %>/js/svg4everybody.js"
					type="text/javascript"
				></script> */}
			</body>
		</html>
	);
};

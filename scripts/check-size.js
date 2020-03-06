/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const Bundler = require('parcel-bundler');
const path = require('path');
const zlib = require('zlib');

const CLI_ARGS = process.argv.slice(2);

const convertBytes = function(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

	bytes = Math.abs(bytes);

	if (bytes == 0) {
		return '-';
	}

	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

	if (i == 0) {
		return `${bytes} ${sizes[i]}`;
	}

	return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};

function processMarkdownTable(prevStats, newStats) {
	const diffedStats = Object.keys(prevStats).reduce((acc, key) => {
		acc[key] = newStats[key] - prevStats[key];

		return acc;
	}, {});

	let table = `
|Package|Size|Previous Size|Change|
|----|----|----|----|`;

	Object.keys(prevStats).forEach(package => {
		const lessThan = diffedStats[package] < 0;

		table += `\n|${package}|${convertBytes(
			newStats[package]
		)}|${convertBytes(prevStats[package])}|${!!diffedStats[package] &&
			(lessThan ? '-' : '+')}${convertBytes(diffedStats[package])}|`;
	});

	return `<details>
	<summary>Bundle Sizes</summary>
	${table}
</details>`;
}

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
];

const getSize = function(filePath) {
	return zlib.gzipSync(fs.readFileSync(filePath)).length;
};

function run() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	const entryFiles = packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.map(({name}) => {
			return path.join(__dirname, '../packages/', name, 'lib/index.js');
		});

	const bundler = new Bundler(entryFiles, {
		cacheDir: '.parcel-cache',
		outDir: '.parcel-ci-builds',
		sourceMaps: false,
		watch: false,
	});

	bundler.on('bundled', () => {
		const bundles = fs.readdirSync('.parcel-ci-builds', {
			withFileTypes: true,
		});

		const bundleData = {};

		bundles.map(({name}) => {
			bundleData[name] = getSize(
				path.join(
					__dirname,
					'../.parcel-ci-builds/',
					name,
					'lib/index.js'
				)
			);
		});

		if (CLI_ARGS.includes('--compare')) {
			// eslint-disable-next-line liferay/no-dynamic-require
			const prevStats = require(path.join(
				__dirname,
				'../base-stats/.parcel-ci-build.json'
			));

			const newStats = bundleData;

			fs.writeFileSync(
				path.join(__dirname, '../.parcel-ci-build.json'),
				JSON.stringify({
					body: processMarkdownTable(prevStats, newStats),
				})
			);
		} else {
			fs.writeFileSync(
				path.join(__dirname, '../.parcel-ci-build.json'),
				JSON.stringify(bundleData)
			);
		}
	});

	bundler.bundle();
}

// fs.writeFileSync(
// 	path.join(__dirname, '../.parcel-ci-build.json'),
// 	JSON.stringify({
// 		body: processMarkdownTable(bundleData),
// 	})
// );
run();

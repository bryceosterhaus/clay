/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
];

const getAllFiles = function(dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath);

	arrayOfFiles = arrayOfFiles || [];

	files.forEach(file => {
		if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
			arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(dirPath, file));
		}
	});

	return arrayOfFiles;
};

const convertBytes = function(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

	if (bytes == 0) {
		return 'n/a';
	}

	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

	if (i == 0) {
		return `${bytes} ${sizes[i]}`;
	}

	return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};

const getTotalSize = function(directoryPath) {
	const arrayOfFiles = getAllFiles(directoryPath);

	let totalSize = 0;

	arrayOfFiles.forEach(filePath => {
		totalSize += fs.statSync(filePath).size;
	});

	return convertBytes(totalSize);
};

async function run() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.forEach(({name}) => {
			const libPath = path.join(__dirname, '../packages/', name, 'lib');

			console.log(name, getTotalSize(libPath));
		});
}

run();

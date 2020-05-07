/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Col from './Col';
import Container from './Container';
import Row from './Row';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	columns?: number;
	lgColumns?: number;
	mdColumns?: number;
	sizeColumns?: number;
	smColumns?: number;
	xsColumns?: number;
	rowMargin?: string | number;
	spacing?: number;
}

const ClayGrid: React.FunctionComponent<IProps> = ({
	children,
	className,
	columns = 4,
	lgColumns,
	mdColumns,
	rowMargin = '1.5rem',
	sizeColumns,
	smColumns,
	spacing,
	xsColumns,
	...otherProps
}) => {
	let startIndex = 0;

	const childrenArr = [...React.Children.toArray(children)];

	const rows = childrenArr.map(() => {
		const rowItems = childrenArr.slice(startIndex, startIndex + columns);

		startIndex += columns;

		return rowItems;
	});

	return (
		<Container {...otherProps} className={classNames(className, {})}>
			{rows.map((row, rowIndex) => {
				return (
					<Row key={rowIndex} style={{marginBottom: rowMargin}}>
						{row.map((item, colIndex) => (
							<Col key={`${rowIndex}-${colIndex}`} size={3}>
								{item}
							</Col>
						))}
					</Row>
				);
			})}
		</Container>
	);
};

export default ClayGrid;

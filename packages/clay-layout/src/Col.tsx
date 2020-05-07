/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

type TColSize = boolean | number | 'auto';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Position in which to align column
	 */
	align?: 'start' | 'center' | 'end';

	/**
	 * Element or component to render for container
	 */
	containerElement?: React.JSXElementConstructor<{
		className: string;
		[key: string]: any;
	}>;

	/**
	 * The number of columns to span on extra-small devices
	 */
	xs?: TColSize;

	/**
	 * The number of columns to span on medium devices
	 */
	md?: TColSize;

	/**
	 * The number of columns to span on large devices
	 */
	lg?: TColSize;

	/**
	 * The number of columns to span on small devices
	 */
	sm?: TColSize;

	/**
	 * The order in which the column should be displayed
	 */
	order?: number | 'first' | 'last';

	/**
	 * The number of columns to span on all devices
	 */
	size?: TColSize;
}

const ClayCol: React.FunctionComponent<IProps> = ({
	align,
	children,
	className,
	containerElement: ContainerElement = 'div',
	lg,
	md,
	order,
	size,
	sm,
	xs,
	...otherProps
}) => {
	const noBreakPoints = !lg && !md && !sm && !xs && !size;

	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, {
				[`align-self${align}`]: align,
				col: noBreakPoints,
				[`col-${size}`]: size,
				'col-lg': lg === true,
				[`col-lg-${lg}`]: lg && typeof lg !== 'boolean',
				'col-md': md === true,
				[`col-md-${md}`]: md && typeof md !== 'boolean',
				'col-sm': sm === true,
				[`col-sm-${sm}`]: sm && typeof sm !== 'boolean',
				'col-xs': xs === true,
				[`col-xs-${xs}`]: xs && typeof xs !== 'boolean',
				[`order-${order}`]: order,
			})}
		>
			{children}
		</ContainerElement>
	);
};

export default ClayCol;

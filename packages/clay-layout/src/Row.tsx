/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Vertical positioning of row contents
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
	 * This removes the negative margins from .row and the
	 * horizontal padding from all immediate children columns
	 */
	gutters?: boolean;

	/**
	 * Horizontal positioning of row contents
	 */
	justify?: 'start' | 'center' | 'end' | 'around' | 'between';
}

const ClayRow: React.FunctionComponent<IProps> = ({
	align,
	children,
	className,
	containerElement: ContainerElement = 'div',
	gutters = true,
	justify,
	...otherProps
}) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames('row', className, {
				'no-gutters': !gutters,
				[`align-items-${align}`]: align,
				[`justify-content-${justify}`]: justify,
			})}
		>
			{children}
		</ContainerElement>
	);
};

export default ClayRow;

/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props {
	className?: string;
	message?: string;
	title?: string;
	type?: string;
	[propName: string]: any;
}

const ClayAlert: React.FunctionComponent<Props> = ({
	className,
	children,
	message,
	title,
	type,
	...otherProps
}) => {
	return (
		<div
			{...otherProps}
			className={classNames('alert', className, {
				[`alert-${type}`]: type,
			})}
			role="alert"
		>
			{title && <strong className="lead">{`${title}: `}</strong>}
			{message}
		</div>
	);
};

ClayAlert.defaultProps = {
	type: 'info',
};

export default ClayAlert;
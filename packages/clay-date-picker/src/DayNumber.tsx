/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import {DateTime} from 'luxon';
import React from 'react';

import {IDay} from './Helpers';

interface IProps {
	day: IDay;
	daySelected: Date;
	disabled?: boolean;
	onClick: (date: Date) => void;
}

const ClayDatePickerDayNumber: React.FunctionComponent<IProps> = ({
	day,
	daySelected,
	disabled,
	onClick,
}) => {
	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active:
				DateTime.fromJSDate(day.date).toFormat('yyyy-LL-dd') ===
				DateTime.fromJSDate(daySelected).toFormat('yyyy-LL-dd'),
			disabled: day.outside || disabled,
		}
	);

	const handleClick = () => onClick(day.date);

	return (
		<button
			aria-label={DateTime.fromJSDate(day.date)
				.set({
					hour: 12,
					millisecond: 0,
					minute: 0,
					second: 0,
				})
				.toFormat('yyyy-LL-dd')}
			className={classNames}
			disabled={day.outside}
			onClick={handleClick}
			type="button"
		>
			{day.date.getDate()}
		</button>
	);
};

export default ClayDatePickerDayNumber;

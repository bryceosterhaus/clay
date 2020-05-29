/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {DateTime} from 'luxon';
import React from 'react';

import * as Helpers from './Helpers';
import {FirstDayOfWeek} from './types';

/**
 * Generates the table of days of the month.
 */
const useWeeks = (currentMonth: Date, firstDayOfWeek: FirstDayOfWeek) => {
	const [weeks, set] = React.useState<Helpers.Month>(() =>
		Helpers.getWeekArray(currentMonth, firstDayOfWeek)
	);

	function setWeeks(value: Date) {
		set(Helpers.getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks] as [Helpers.Month, (value: Date) => void];
};

/**
 * Sets the current time
 */
const useCurrentTime = (format: string) => {
	const [currentTime, set] = React.useState<string>(() =>
		DateTime.local().toFormat(format)
	);

	function setCurrentTime(
		hour: number | string,
		minute: number | string
	): void {
		if (typeof hour !== 'string') {
			hour = DateTime.local().set({hour}).hour;
		}

		if (typeof minute !== 'string') {
			minute = DateTime.local().set({minute}).minute;
		}

		set(`${hour}:${minute}`);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hour: number | string, minute: number | string) => void
	];
};

export {useCurrentTime, useWeeks};

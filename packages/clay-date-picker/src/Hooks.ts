/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
		Helpers.formatDate(
			Helpers.setDate(new Date(), {hours: 0, minutes: 0}),
			format
		)
	);

	function setCurrentTime(
		hours: number | string,
		minutes: number | string
	): void {
		const date = Helpers.setDate(new Date(), {hours, minutes});

		if (typeof hours !== 'string') {
			hours = Helpers.formatDate(date, 'H');
		}

		if (typeof minutes !== 'string') {
			minutes = Helpers.formatDate(date, 'm');
		}

		set(`${hours}:${minutes}`);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number | string, minutes: number | string) => void
	];
};

export {useCurrentTime, useWeeks};

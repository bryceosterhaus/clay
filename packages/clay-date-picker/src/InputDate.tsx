/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import {DateTime} from 'luxon';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	disabled?: boolean;
	inputName?: string;
	locale?: string;
	placeholder?: string;
	time: boolean;
	timeFormat: string;
	useNative: boolean;
	value: string;
}

const ClayDatePickerInputDate = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			ariaLabel,
			currentTime,
			dateFormat,
			inputName = 'datePicker',
			locale,
			time = false,
			timeFormat,
			useNative = false,
			value = '',
			...otherProps
		},
		ref
	) => {
		const isValidValue = (value: string | Date): string => {
			const format = time ? `${dateFormat} ${timeFormat}` : dateFormat;

			if (
				value instanceof Date &&
				DateTime.fromISO(value.toISOString()).isValid
			) {
				const date = DateTime.fromJSDate(value)
					.setLocale(locale)
					// .toFormat(format)
					.toLocaleString();

				return time ? `${date} ${currentTime}` : date;
			}

			return value as string;
		};

		const memoizedValue = React.useMemo(() => isValidValue(value), [
			value,
			currentTime,
		]);

		return (
			<>
				<input name={inputName} type="hidden" value={memoizedValue} />
				<ClayInput
					{...otherProps}
					aria-label={ariaLabel}
					insetAfter={!useNative}
					ref={ref}
					type={useNative ? 'date' : 'text'}
					value={memoizedValue}
				/>
			</>
		);
	}
);

export default ClayDatePickerInputDate;

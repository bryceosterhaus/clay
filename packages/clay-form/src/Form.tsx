/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';

import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

const ClayForm: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Checkbox: typeof Checkbox;
	FeedbackGroup: typeof FeedbackGroup;
	FeedbackIndicator: typeof FeedbackIndicator;
	FeedbackItem: typeof FeedbackItem;
	Group: typeof Group;
	Input: typeof Input;
	Radio: typeof Radio;
	RadioGroup: typeof RadioGroup;
	Text: typeof Text;
} = ({children}) => <>{children}</>;

const Group = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-group', className)}
		ref={ref}
	>
		{children}
	</div>
));

const Text = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-text', className)}
		ref={ref}
	>
		{children}
	</div>
));

const FeedbackGroup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-feedback-group', className)}
		ref={ref}
	>
		{children}
	</div>
));

const FeedbackItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('form-feedback-item', className)}
		ref={ref}
	>
		{children}
	</div>
));

interface IFeedbackIndicatorProps
	extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Name of icon symbol
	 */
	symbol: string;
}

const FeedbackIndicator = React.forwardRef<
	HTMLDivElement,
	IFeedbackIndicatorProps
>(({className, spritemap, symbol, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames('form-feedback-indicator', className)}
		ref={ref}
	>
		<ClayIcon spritemap={spritemap} symbol={symbol} />
	</span>
));

ClayForm.Checkbox = Checkbox;
ClayForm.FeedbackGroup = FeedbackGroup;
ClayForm.FeedbackIndicator = FeedbackIndicator;
ClayForm.FeedbackItem = FeedbackItem;
ClayForm.Group = Group;
ClayForm.Input = Input;
ClayForm.Radio = Radio;
ClayForm.RadioGroup = RadioGroup;
ClayForm.Text = Text;

export default ClayForm;

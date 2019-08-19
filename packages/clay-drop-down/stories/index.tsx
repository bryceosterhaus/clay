/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayDatePicker from '@clayui/date-picker';
import ClayDropDown, {Align, ClayDropDownWithBasicItems} from '../src';
import React, {useState} from 'react';
import {ClayCheckbox, ClayRadio} from '@clayui/form';
import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayDatePickerWithState = (props: {[key: string]: any}) => {
	const [value, setValue] = useState<string | Date>('');

	return (
		<ClayDatePicker
			{...props}
			onValueChange={setValue}
			spritemap={spritemap}
			value={value as string}
		/>
	);
};

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={select(
				'Alignment Position',
				{
					BottomCenter: Align.BottomCenter,
					BottomLeft: Align.BottomLeft,
					BottomRight: Align.BottomRight,
					LeftCenter: Align.LeftCenter,
					RightCenter: Align.RightCenter,
					TopCenter: Align.TopCenter,
					TopLeft: Align.TopLeft,
					TopRight: Align.TopRight,
				},
				Align.BottomLeft
			)}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayButton>{'Click Me'}</ClayButton>}
		>
			{children}
		</ClayDropDown>
	);
};

storiesOf('ClayDropDown', module).add('Date Picker in Dropdown', () => (
	<DropDownWithState>
		<ClayDropDown.ItemList>
			<ClayDropDown.Item>
				<div className="dropdown-section">
					<ClayDatePickerWithState
						placeholder="YYYY-MM-DD"
						spritemap={spritemap}
						years={{
							end: 2024,
							start: 1997,
						}}
					/>
				</div>
			</ClayDropDown.Item>
		</ClayDropDown.ItemList>
	</DropDownWithState>
));

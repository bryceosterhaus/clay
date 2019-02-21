/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import 'clay-css/lib/css/atlas.css';
import * as React from 'react';
import ClayAlert from '@clayui/alert';
import {ControlType, PropertyControls,} from 'framer';

type Props = {message: string; title: string; type: string};

export class Alert extends React.Component<Props> {
	state = {
		active: false,
	};
	render() {
		return (
			<ClayAlert
				message={this.state.active ? this.props.message : 'nope'}
				onClick={() => this.setState({active: true,})}
				title={this.props.title}
				type={this.props.type}
			/>
		);
	}

	static defaultProps: Props = {
		message: 'This is your alert!',
		title: 'Info',
		type: 'info',
	};

	static propertyControls: PropertyControls<Props> = {
		message: {type: ControlType.String, title: 'Message',},
		title: {type: ControlType.String, title: 'Title',},
		type: {
			type: ControlType.Enum,
			title: 'Type',
			options: ['error', 'success', 'info', 'warning',],
			optionTitles: ['error', 'success', 'info', 'warning',],
		},
	};
}
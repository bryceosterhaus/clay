/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import 'clay-css/lib/css/atlas.css';
import * as React from 'react';
import ClayBadge from '@clayui/badge';
import {ControlType, PropertyControls,} from 'framer';

type Props = {label: string; type: string};

export class Badge extends React.Component<Props> {
	render() {
		return <ClayBadge label={this.props.label} type={this.props.type} />;
	}

	static defaultProps: Props = {
		label: '5',
		type: 'primary',
	};

	static propertyControls: PropertyControls<Props> = {
		label: {type: ControlType.String, title: 'Label',},
		type: {
			type: ControlType.Enum,
			title: 'Type',
			options: [
				'primary',
				'secondary',
				'info',
				'danger',
				'success',
				'warning',
			],
			optionTitles: [
				'primary',
				'secondary',
				'info',
				'danger',
				'success',
				'warning',
			],
		},
	};
}
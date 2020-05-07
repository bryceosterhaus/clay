/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLayout from '../src';

const colExampleStyles = {
	backgroundColor: 'rgba(86,61,124,.15)',
	border: '1px solid rgba(86,61,124,.2)',
	paddingBottom: '.75rem',
	paddingTop: '.75rem',
};

const ClayDemoColumn: typeof ClayLayout.Col = (props) => (
	<ClayLayout.Col style={colExampleStyles} {...props} />
);

storiesOf('Components|ClayLayout', module)
	.add('row positioning', () => (
		<ClayLayout.Container view>
			<ClayLayout.Row justify="start">
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
			</ClayLayout.Row>
			<ClayLayout.Row justify="center">
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
			</ClayLayout.Row>
			<ClayLayout.Row justify="end">
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
			</ClayLayout.Row>
			<ClayLayout.Row justify="around">
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
			</ClayLayout.Row>
			<ClayLayout.Row justify="between">
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
				<ClayDemoColumn size={4}>{'One of two columns'}</ClayDemoColumn>
			</ClayLayout.Row>
		</ClayLayout.Container>
	))
	.add('stacking at breakpoints', () => (
		<ClayLayout.Container view>
			<ClayLayout.Row>
				<ClayDemoColumn sm={8}>{'col-sm-8'}</ClayDemoColumn>
				<ClayDemoColumn sm={4}>{'col-sm-4'}</ClayDemoColumn>
			</ClayLayout.Row>
			<ClayLayout.Row>
				<ClayDemoColumn sm>{'col-sm'}</ClayDemoColumn>
				<ClayDemoColumn sm>{'col-sm'}</ClayDemoColumn>
				<ClayDemoColumn sm>{'col-sm'}</ClayDemoColumn>
			</ClayLayout.Row>
		</ClayLayout.Container>
	))
	.add('ordering', () => (
		<ClayLayout.Container view>
			<ClayLayout.Row>
				<ClayDemoColumn>{'First, but unordered'}</ClayDemoColumn>
				<ClayDemoColumn order={12}>{'Second, but last'}</ClayDemoColumn>
				<ClayDemoColumn order={1}>{'Third, but first'}</ClayDemoColumn>
			</ClayLayout.Row>
		</ClayLayout.Container>
	))
	.add('mix and match', () => (
		<ClayLayout.Container view>
			<ClayLayout.Row>
				<ClayDemoColumn md={8} size={12}>
					{'.col-12 .col-md-8'}
				</ClayDemoColumn>
				<ClayDemoColumn md={4} size={6}>
					{'.col-6 .col-md-4'}
				</ClayDemoColumn>
			</ClayLayout.Row>

			<ClayLayout.Row>
				<ClayDemoColumn md={4} size={6}>
					{'.col-6 .col-md-4'}
				</ClayDemoColumn>
				<ClayDemoColumn md={4} size={6}>
					{'.col-6 .col-md-4'}
				</ClayDemoColumn>
				<ClayDemoColumn md={4} size={6}>
					{'.col-6 .col-md-4'}
				</ClayDemoColumn>
			</ClayLayout.Row>

			<ClayLayout.Row>
				<ClayDemoColumn size={6}>{'.col-6'}</ClayDemoColumn>
				<ClayDemoColumn size={6}>{'.col-6'}</ClayDemoColumn>
			</ClayLayout.Row>
		</ClayLayout.Container>
	));

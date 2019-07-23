/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm from '@clayui/form';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import Context from './Context';
import React, {useContext, useEffect} from 'react';

const LoadingIndicatorMarkup: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, ...otherProps}) => (
	<ClayForm.Input.GroupInsetItem {...otherProps} after>
		<span className="inline-item inline-item-middle">{children}</span>
	</ClayForm.Input.GroupInsetItem>
);

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ComponentType<any>;
}

const ClayAutocompleteLoadingIndicator: React.FunctionComponent<IProps> = ({
	className,
	component: Component = LoadingIndicatorMarkup,
	...otherProps
}: IProps) => {
	const {onLoadingChange} = useContext(Context);

	useEffect(() => {
		onLoadingChange(true);

		return () => {
			onLoadingChange(false);
		};
	}, []);

	return (
		<Component {...otherProps} className={className}>
			<ClayLoadingIndicator small />
		</Component>
	);
};

export default ClayAutocompleteLoadingIndicator;

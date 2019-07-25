/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm from '@clayui/form';
import Context from './Context';
import DropDown from './DropDown';
import Input from './Input';
import Item from './Item';
import LoadingIndicator from './LoadingIndicator';
import React, {useRef, useState} from 'react';

const AutocompleteMarkup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, ...otherProps}, ref) => (
	<ClayForm.Input.Group {...otherProps} ref={ref}>
		<ClayForm.Input.GroupItem>{children}</ClayForm.Input.GroupItem>
	</ClayForm.Input.Group>
));

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Div component to render. It can be a one component that will replace the markup.
	 */
	component?: React.ForwardRefExoticComponent<any>;
}

const ClayAutocomplete: React.FunctionComponent<IProps> & {
	DropDown: typeof DropDown;
	Input: typeof Input;
	Item: typeof Item;
	LoadingIndicator: typeof LoadingIndicator;
} = ({
	children,
	className,
	component: Component = AutocompleteMarkup,
	...otherProps
}: IProps) => {
	const containerElementRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(false);

	return (
		<Component
			{...otherProps}
			className={className}
			ref={containerElementRef}
		>
			<Context.Provider
				value={{
					containerElementRef,
					loading,
					onLoadingChange: (loading: boolean) => setLoading(loading),
				}}
			>
				{children}
			</Context.Provider>
		</Component>
	);
};

ClayAutocomplete.DropDown = DropDown;
ClayAutocomplete.Input = Input;
ClayAutocomplete.Item = Item;
ClayAutocomplete.LoadingIndicator = LoadingIndicator;

export default ClayAutocomplete;

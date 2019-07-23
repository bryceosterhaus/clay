/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Callback for when input value changes.
	 */
	onChange: (event: React.FormEvent<HTMLInputElement>) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Value of the searchInput
	 */
	value: React.ReactText;
}

const ClayDropDownSearch: React.FunctionComponent<IProps> = ({
	className,
	spritemap,
	...otherProps
}: IProps) => {
	return (
		<form className={className}>
			<div className="dropdown-section">
				<ClayForm.Input.Group small>
					<ClayForm.Input.GroupItem>
						<ClayForm.Input
							{...otherProps}
							insetAfter
							type="text"
						/>

						<ClayForm.Input.GroupInsetItem after tag="span">
							<ClayButton displayType="unstyled" type="button">
								<ClayIcon
									spritemap={spritemap}
									symbol="search"
								/>
							</ClayButton>
						</ClayForm.Input.GroupInsetItem>
					</ClayForm.Input.GroupItem>
				</ClayForm.Input.Group>
			</div>
		</form>
	);
};

export default ClayDropDownSearch;

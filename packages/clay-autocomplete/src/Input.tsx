/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm from '@clayui/form';
import Context from './Context';
import React, {useContext} from 'react';

export interface IProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		React.ComponentProps<typeof ClayForm.Input> {}

const ClayAutocompleteInput = React.forwardRef<HTMLInputElement, IProps>(
	(props, ref) => {
		const {loading} = useContext(Context);

		return <ClayForm.Input {...props} insetAfter={loading} ref={ref} />;
	}
);

export default ClayAutocompleteInput;

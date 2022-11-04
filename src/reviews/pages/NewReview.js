import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMPTY } from '../../shared/validators';

const NewReview = () => {
	return (
		<form>
			<Input
				element="input"
				type="text"
				id="first"
				label="First input field"
				placeholder="Type something there"
				validators={[VALIDATOR_EMPTY()]}
				errorText="Invalid"
			/>
		</form>
	);
};

export default NewReview;

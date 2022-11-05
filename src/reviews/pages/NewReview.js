import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Select from '../../shared/components/FormElements/Select';
import { VALIDATOR_EMPTY, VALIDATOR_MINLEN } from '../../shared/validators';
import { POSLIST } from '../../testData/positions.js';

const NewReview = () => {
	const departmentOptions = [];
	POSLIST.forEach(e => {
		if (!departmentOptions.includes(e.department)) {
			departmentOptions.push(e.department);
			departmentOptions.sort();
		}
	});

	return (
		<form>
			<Input
				element="input"
				type="text"
				id="position"
				label="Milyen pozíciót töltöttél be a szakmai gyakorlatod során?"
				placeholder="Pozíció megnevezése"
				validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
			/>
			<Select id="department" label="Milyen területen dolgoztál?"
			options={departmentOptions} validators={[VALIDATOR_EMPTY()]}/>
						
					<Input
				element="input"
				type="text"
				id="position"
				label="Milyen pozíciót töltöttél be a szakmai gyakorlatod során?"
				placeholder="Pozíció megnevezése"
				validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
			/>
		</form>
	);
};

export default NewReview;

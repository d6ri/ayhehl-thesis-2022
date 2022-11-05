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
				label="Milyen pozíciót töltöttél be a szakmai gyakorlatod során? *"
				placeholder="Pozíció megnevezése"
				validators={[VALIDATOR_EMPTY(), VALIDATOR_MINLEN(3)]}
			/>
			<Select id="department" label="Milyen területen dolgoztál? *"
			options={departmentOptions} validators={[VALIDATOR_EMPTY()]}/>
						
					<Input
				element="textarea"
				type="text"
				id="tasks"
				label="Milyen feladatokat kellett elvégezned?"
				validators={[]}
			/>
			<fieldset>
				<legend>Kaptál a cégtől szakdolgozati témajavaslatot vagy külső konzulensi támogatást? *</legend>
				<div>
					<input type="radio" value="yes" name="thesis" id="thesis_yes" required/>
					<label>Igen</label>
					<input type="radio" value="no" name="thesis" id="thesis_no"/>
					<label>Nem</label>
				</div>
			</fieldset>
			<fieldset>
				<legend>Ajánlott a cég lehetőséget a szakmai gyakorlat elvégzése után valamely (junior) pozíción való elhelyezkedéshez? *</legend>
				<div>
					<input type="radio" value="yes" name="jobOffer" id="jobOffer_yes" required/>
					<label>Igen</label>
					<input type="radio" value="no" name="jobOffer" id="jobOffer_no"/>
					<label>Nem</label>
				</div>
			</fieldset>
			<Input
				element="textarea"
				type="text"
				id="suggestions"
				label="Fogalmazd meg javaslataidat, észrevételeid, véleményed az eltöltött szakmai gyakorlattal kapcsolatban! "
				validators={[]}
			/>
		</form>
	);
};

export default NewReview;

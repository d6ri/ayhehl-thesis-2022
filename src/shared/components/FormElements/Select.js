import React, { useReducer }  from 'react';

import { validate } from '../../validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			const validation = validate(action.value, action.validators);
			return {
				...state,
				value: action.value,
				isValid: validation.isValid,
				errorText: validation.errorText,
			};
		case 'TOUCH':
			return { ...state, isTouched: true };
		default:
			return state;
	}

};

const Select = ({ id, label, options, validators }) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '',
		isValid: false,
		isTouched:false,
		errorText: '',
	});

	const changeHandler = event => {
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			validators: validators,
		});
	};

	const touchHandler = (event) => {
		dispatch({
			type: 'TOUCH',
		});
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			validators: validators,
		});
	};

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} onChange={changeHandler} onBlur={touchHandler} value={inputState.value}>
				<option value="" disabled >Válassz egy területet</option>
				{options.map(e => (
					<option value={e} key={e}>{e}</option>
				))}
			</select>
			<p>{!inputState.isValid && inputState.isTouched && inputState.errorText}</p>
		</div>
	);
};

export default Select;

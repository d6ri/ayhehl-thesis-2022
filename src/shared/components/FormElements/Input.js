import React, { useReducer } from 'react';

import { validate } from '../../validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.value,
				isValid: validate(action.value, action.validators),
			};
		default:
			return state;
	}
};

const Input = props => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '',
		isValid: false,
	});

	const changeHandler = event => {
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			validators: props.validators,
		});
	};

	const element =
		props.element === 'input' ? (
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				value={inputState.value}
				onChange={changeHandler}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 5}
				value={inputState.value}
				onChange={changeHandler}
			/>
		);
	return (
		<div
			className={`form-control ${
				!inputState.isValid && 'form-control--invalid'
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{!inputState.isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default Input;

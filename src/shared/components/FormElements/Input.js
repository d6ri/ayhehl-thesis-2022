import React, { useReducer } from 'react';

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

const Input = props => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '',
		isValid: false,
		isTouched: false,
		errorText: '',
	});

	const changeHandler = event => {
		dispatch({
			type: 'CHANGE',
			value: event.target.value,
			validators: props.validators,
		});
	};

	const touchHandler = () => {
		dispatch({
			type: 'TOUCH',
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
				onBlur={touchHandler}
			/>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 5}
				value={inputState.value}
				onChange={changeHandler}
				onBlur={touchHandler}
			/>
		);
	return (
		<div
			className={`form-control ${
				!inputState.isValid && inputState.isTouched && 'form-control--invalid'
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{!inputState.isValid && inputState.isTouched && (
				<p>{inputState.errorText}</p>
			)}
		</div>
	);
};

export default Input;

// identifiers
const VALIDATOR_TYPE_EMPTY = 'EMPTY';

// validator configuration objects
export const VALIDATOR_EMPTY = () => ({
	type: VALIDATOR_TYPE_EMPTY,
	errorText: 'Kötelezően kitöltendő mező, ne hagyd üresen!',
});

export const validate = (value, validators) => {
	let isValid = true;
	let errorText = '';
	for (const validator of validators) {
		if (validator.type === VALIDATOR_TYPE_EMPTY) {
			isValid = isValid && value.length > 0;
			if (!isValid) errorText=validator.errorText;
		}
	}
	return {isValid: isValid, errorText: errorText};
};

// identifiers
const VALIDATOR_TYPE_EMPTY = 'EMPTY';

// validator configuration objects
export const VALIDATOR_EMPTY = () => ({ type: VALIDATOR_TYPE_EMPTY });

export const validate = (value, validators) => {
	let isValid = true;
	for (const validator of validators) {
		if (validator.type === VALIDATOR_TYPE_EMPTY) {
			isValid = isValid && value.length > 0;
		}
	}
	return isValid;
};

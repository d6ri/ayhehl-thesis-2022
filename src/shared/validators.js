// identifiers
const VALIDATOR_TYPE_EMPTY = "EMPTY";
const VALIDATOR_TYPE_MINLEN = "MINLEN";

// validator configuration objects
export const VALIDATOR_EMPTY = () => ({
  type: VALIDATOR_TYPE_EMPTY,
  errorText: "Kötelezően kitöltendő mező, ne hagyd üresen!",
});
export const VALIDATOR_MINLEN = (minval) => ({
  type: VALIDATOR_TYPE_MINLEN,
  minval: minval,
  errorText: `Több, mint ${minval} karakter hosszúnak kell lennie!`,
});

export const validate = (value, validators) => {
  let isValid = true;
  let errorText = "";
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_MINLEN) {
      isValid = isValid && value.length > validator.minval;
      if (!isValid) {
        errorText = validator.errorText;
        break;
      }
    }
    if (validator.type === VALIDATOR_TYPE_EMPTY) {
      isValid = isValid && value !== "";
      if (!isValid) {
        errorText = validator.errorText;
        break;
      }
    }
  }
  return { isValid: isValid, errorText: errorText };
};

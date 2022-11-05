import React from 'react';

const Select = ({ id, label, options }) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} required>
				{options.map(e => (
					<option value={e}>{e}</option>
				))}
			</select>
		</div>
	);
};

export default Select;

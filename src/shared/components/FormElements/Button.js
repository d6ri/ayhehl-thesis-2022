import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
	if (props.to) {
		return <Link to={props.to}>{props.children}</Link>;
	}
	return (
		<button onClick={props.onClick} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;

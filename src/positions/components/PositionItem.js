import React from 'react';

const PositionItem = props => {
	return (
		<li>
			<div>
				<img src={`/images/${props.wid}.jpg`} alt={props.pid} />
				<h2>{props.name}</h2>
			</div>
		</li>
	);
};

export default PositionItem;

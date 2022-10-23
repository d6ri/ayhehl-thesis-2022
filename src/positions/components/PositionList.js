import React from 'react';

import PositionItem from './PositionItem.js';

const PositionsList = props => {
	if (props.positions.length === 0) {
		return <div>Nincsenek nyitott gyakornoki pozíciók.</div>;
	}

	return (
		<ul>
			{props.positions.map(position => (
				<PositionItem
					pid={position.pid}
					cid={position.cid}
					name={position.name}
					location={position.location}
					department={position.department}
					key={position.pid}
				/>
			))}
		</ul>
	);
};

export default PositionsList;

import React from 'react';

import PositionItem from './PositionItem.js';
import { RefinePositionSearch } from '../../shared/sharedFunctions.js';

const PositionsList = ({ searchText, filterDepartment, positionsList }) => {
	const filteredData = RefinePositionSearch(
		positionsList,
		searchText,
		filterDepartment
	);

	if (positionsList.length === 0) {
		return <div>Nincsenek nyitott gyakornoki pozíciók.</div>;
	}

	return (
		<ul>
			{filteredData.map(position => (
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

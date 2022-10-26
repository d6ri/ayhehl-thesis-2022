import { React, useState } from 'react';

import { POSLIST } from '../../testData/positions';
import PositionsList from '../components/PositionList';

const Positions = () => {
	const departmentOptions = [''];
	POSLIST.forEach(e => {
		if (!departmentOptions.includes(e.department)) {
			departmentOptions.push(e.department);
			departmentOptions.sort();
		}
	});

	const [inputText, setInputText] = useState('');
	function inputHandler(e) {
		setInputText(e.target.value.toLowerCase());
	}

	return (
		<div>
			<div className="searchBar">
				<input
					onChange={inputHandler}
					defaultValue=""
					type="text"
					placeholder="Keresés a pozíciók között"
					label="Search"
				/>
			</div>
			<PositionsList searchText={inputText} positionsList={POSLIST} />
		</div>
	);
};

export default Positions;

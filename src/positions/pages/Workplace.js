import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { POSLIST } from '../../testData/positions';
import { WORKPLIST } from '../../testData/workplaces';

const Workplace = () => {
	const navigate = useNavigate();
	const wid = useParams().wid;
	const workplace = WORKPLIST.find(wp => wp.wid == wid);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Vissza</button>
			{workplace.name}
		</div>
	);
};

export default Workplace;

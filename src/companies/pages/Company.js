import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { COMPLIST } from '../../testData/companies';

const Company = () => {
	const navigate = useNavigate();
	const cid = useParams().cid;
	const company = COMPLIST.find(comp => comp.cid.toString() === cid);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Vissza</button>
			{company.name}
		</div>
	);
};

export default Company;

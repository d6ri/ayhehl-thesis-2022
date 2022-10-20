import React from 'react';
import { useParams } from 'react-router-dom';

import { POSLIST } from '../../testData/positions';
import { WORKPLIST } from '../../testData/workplaces';

const Workplace = () => {
	const wid = useParams().wid;

	const workplace = WORKPLIST.find(wp => wp.wid == wid);
	console.log(workplace);

	return <div>{workplace.name}</div>;
};

export default Workplace;

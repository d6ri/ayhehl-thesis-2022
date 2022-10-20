import React from 'react';
import { useParams } from 'react-router-dom';

import { POSLIST } from '../../testData/positions';
import { WORKPLIST } from '../../testData/workplaces';

const Position = () => {
	const wid = useParams().wid;
	const pid = useParams().pid;

	const posi = POSLIST.find(pos => pos.pid == pid);
	console.log(posi);

	return <div>{posi.name}</div>;
};

export default Position;

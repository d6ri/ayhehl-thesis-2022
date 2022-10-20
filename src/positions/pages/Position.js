import React from 'react';
import { useParams } from 'react-router-dom';

import IndexImg from '../components/UI/IndexImg';
import { POSLIST } from '../../testData/positions';
import { WORKPLIST } from '../../testData/workplaces';

const Position = () => {
	const pid = useParams().pid;

	const position = POSLIST.find(pos => pos.pid == pid);

	return (
		<div>
			<div>
				<IndexImg
					src={`/images/${position.wid}.jpg`}
					alt={position.wid}
					widht="150px"
					height="150px"
				/>
				<h1>{position.name}</h1>
			</div>
			<div>
				<h3>Terület: {position.department}</h3>
				<h3>Munkavégzés helye: {position.location}</h3>
				<h3>Szerződés típusa: {position.contract}</h3>
				<h3>Munkaviszony időtartama: {position.duration}</h3>
				<h3>Munkaórák: {position.schedule} / hét</h3>
			</div>
			<div>
				<h3>Leírás</h3>
				<p>{position.description}</p>
			</div>
		</div>
	);
};

export default Position;

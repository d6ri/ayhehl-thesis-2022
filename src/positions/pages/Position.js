import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import IndexImg from '../../shared/components/UI/IndexImg';
import { POSLIST } from '../../testData/positions';
import { COMPLIST } from '../../testData/companies';

const Position = () => {
	const navigate = useNavigate();
	const pid = useParams().pid;
	const position = POSLIST.find(pos => pos.pid.toString() === pid);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Vissza</button>

			<div>
				<IndexImg
					src={`/images/${position.cid}.jpg`}
					alt={position.cid}
					widht="150px"
					height="150px"
				/>
				<h1>{position.name}</h1>
			</div>
			<div>
				<h3>
					Cég neve:
					{COMPLIST.map(comp => {
						if (comp.cid === position.cid)
							return (
								<Link to={`/companies/${position.cid}`}> {comp.name}</Link>
							);
					})}
				</h3>
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

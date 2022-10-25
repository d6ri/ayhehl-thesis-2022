import React from 'react';
import { Link } from 'react-router-dom';

import IndexImg from '../../shared/components//UI/IndexImg.js';
import Card from '../../shared/components//UI/Card.js';
import Button from '../../shared/components/FormElements/Button.js';
import { COMPLIST } from '../../testData/companies.js';
import './PositionItem.css';

const PositionItem = ({ pid, cid, name, location, department }) => {
	const company = COMPLIST.find(comp => comp.cid === cid);
	return (
		<li>
			<Card>
				<div className="positem__head">
					<IndexImg
						src={`/images/${cid}.jpg`}
						alt={cid}
						widht="100px"
						height="100px"
					/>
					<Link to={`/positions/${pid}`}>
						<h2>{name}</h2>
					</Link>
				</div>
				<div className="positem__info">
					<h3>
						Cég neve: <Link to={`/companies/${cid}`}> {company.name}</Link>
					</h3>

					<h3>Terület: {department}</h3>
					<h3>Munkavégzés helye: {location}</h3>
					<Button to={`/positions/${pid}`}>Részletek</Button>
				</div>
			</Card>
		</li>
	);
};

export default PositionItem;

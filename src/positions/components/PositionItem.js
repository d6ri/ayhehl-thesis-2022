import React from 'react';
import { Link } from 'react-router-dom';

import IndexImg from '../../shared/components//UI/IndexImg.js';
import Card from '../../shared/components//UI/Card.js';
import Button from '../../shared/components/FormElements/Button.js';
import { COMPLIST } from '../../testData/companies.js';
import './PositionItem.css';

const PositionItem = props => {
	return (
		<li>
			<Card>
				<div className="positem__head">
					<IndexImg
						src={`/images/${props.cid}.jpg`}
						alt={props.cid}
						widht="100px"
						height="100px"
					/>
					<Link to={`/positions/${props.pid}`}>
						<h2>{props.name}</h2>
					</Link>
				</div>
				<div className="positem__info">
					<h3>
						Cég neve:
						{COMPLIST.map(comp => {
							if (comp.cid === props.cid)
								return <Link to={`/companies/${props.cid}`}> {comp.name}</Link>;
						})}
					</h3>

					<h3>Terület: {props.department}</h3>
					<h3>Munkavégzés helye: {props.location}</h3>
					<Button to={`/positions/${props.pid}`}>Részletek</Button>
				</div>
			</Card>
		</li>
	);
};

export default PositionItem;

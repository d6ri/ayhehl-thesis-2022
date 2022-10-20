import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import IndexImg from './UI/IndexImg.js';
import Card from './UI/Card.js';
import { WORKPLIST } from '../../testData/workplaces.js';
import './PositionItem.css';

const PositionItem = props => {
	return (
		<li>
			<Card>
				<div className="positem__head">
					<IndexImg
						src={`/images/${props.wid}.jpg`}
						alt={props.wid}
						widht="100px"
						height="100px"
					/>
					<Link to={`/positions/${props.pid}`}>
						<h2>{props.name}</h2>
					</Link>
				</div>
				<div className="positem__info">
					<Link to={`/workplaces/${props.wid}`}>
						<h3>
							Cég neve:
							{WORKPLIST.map(wp => {
								if (wp.wid === props.wid) return ` ${wp.name}`;
							})}
						</h3>
					</Link>
					<h3>Terület: {props.department}</h3>
					<h3>Munkavégzés helye: {props.location}</h3>
					<button>Részletek</button>
				</div>
			</Card>
		</li>
	);
};

export default PositionItem;

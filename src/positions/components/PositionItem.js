import React, { useEffect, useState } from 'react';
import { WORKPLIST } from '../../testData/workplaces.js';

const PositionItem = props => {
	return (
		<li>
			<div>
				<img src={`/images/${props.wid}.jpg`} alt={props.wid} />
				<h2>{props.name}</h2>
			</div>
			<div>
				<h3>
					Cég neve:
					{WORKPLIST.map(wp => {
						if (wp.wid === props.wid) return ` ${wp.name}`;
					})}
				</h3>
				<h3>Terület: {props.department}</h3>
				<h3>Munkavégzés helye: {props.location}</h3>
				<button>Részletek</button>
			</div>
		</li>
	);
};

export default PositionItem;

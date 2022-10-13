import React, { useEffect, useState } from 'react';
import IndexImg from './UI/IndexImg.js';
import { WORKPLIST } from '../../testData/workplaces.js';

const PositionItem = props => {
	return (
		<li>
			<div>
				<IndexImg
					src={`/images/${props.wid}.jpg`}
					alt={props.wid}
					widht="100px"
					height="100px"
				/>
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

import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UI/Card';
import IndexImg from '../../shared/components/UI/IndexImg';
import Button from '../../shared/components/FormElements/Button';

const CompanyItem = ({ cid, name, industry, headquarters }) => {
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
					<Link to={`/companies/${cid}`}>
						<h2>{name}</h2>
					</Link>
				</div>
				<div className="positem__info">
					<h3>
						Cég neve: <Link to={`/companies/${cid}`}> {name} </Link>
					</h3>
					<h3>Iparág: {industry}</h3>
					<h3>Székhelye: {headquarters}</h3>
					<Button to={`/companies/${cid}`}>Részletek</Button>
				</div>
			</Card>
		</li>
	);
};

export default CompanyItem;

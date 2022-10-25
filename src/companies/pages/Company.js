import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { COMPLIST } from '../../testData/companies';
import IndexImg from '../../shared/components/UI/IndexImg';

const Company = () => {
	const navigate = useNavigate();
	const cid = useParams().cid;
	const company = COMPLIST.find(comp => comp.cid.toString() === cid);

	return (
		<div>
			<button onClick={() => navigate(-1)}>Vissza</button>
			<div>
				<IndexImg
					src={`/images/${company.cid}.jpg`}
					alt={company.cid}
					widht="150px"
					height="150px"
				/>
				<h1>{company.name}</h1>
			</div>
			<div>
				<h3>Iparág: {company.industry}</h3>
				<h3>Cég mérete: {company.size}</h3>
				<h3>Székhely: {company.headquarters}</h3>
				<h3>Alapítás éve: {company.founded}</h3>
			</div>
			<div>
				<h3>A cégről</h3>
				<p>{company.description}</p>
			</div>
		</div>
	);
};

export default Company;

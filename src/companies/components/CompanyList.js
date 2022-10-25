import React from 'react';

import CompanyItem from './CompanyItem';

const CompanyList = props => {
	if (props.companies.length === 0) {
		return <div>Jelenleg az adatbázisban nem szerepelnek cégek.</div>;
	}

	return (
		<ul>
			{props.companies.map(company => (
				<CompanyItem
					cid={company.cid}
					name={company.name}
					industry={company.industry}
					headquarters={company.headquarters}
					size={company.size}
					key={company.cid}
				/>
			))}
		</ul>
	);
};

export default CompanyList;

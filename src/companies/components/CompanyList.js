import React from 'react';

const CompanyList = props => {
	if (props.companies.length === 0) {
		return <div>Jelenleg az adatbázisban nem szerepelnek cégek.</div>;
	}

	return (
		<ul>
			{props.companies.map(position => (
				<PositionItem
					pid={position.pid}
					wid={position.wid}
					name={position.name}
					location={position.location}
					department={position.department}
					key={position.pid}
				/>
			))}
		</ul>
	);
};

export default CompanyList;

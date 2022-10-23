import React from 'react';

import { COMPLIST } from '../../testData/companies';
import CompanyList from '../components/CompanyList';

const Companies = () => {
	return (
		<div>
			<CompanyList companies={COMPLIST} />
		</div>
	);
};

export default Companies;

import React from 'react';

import { COMPLIST } from '../../testData/companies';
import CompanyList from '../components/CompanyList';

const Companies = () => {
  return (
    <div>
      <h3 className='pageTitle'>Partnercégek</h3>
      <CompanyList companies={COMPLIST} />
    </div>
  );
};

export default Companies;

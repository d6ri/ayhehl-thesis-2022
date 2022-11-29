import React from 'react';

const CompanyAbout = ({ description }) => {
  return (
    <div className='main-left'>
      <h4 className='tab-subtitle'>Rólunk</h4>
      {description}
    </div>
  );
};

export default CompanyAbout;

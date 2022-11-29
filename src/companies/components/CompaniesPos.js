import React from 'react';
import PositionsList from '../../positions/components/PositionList';

import '../../shared/components/UI/Tab/Tabs.css';

import { companiesPositionsList } from '../../shared/queries';

const CompaniesPos = ({ cid }) => {
  const FilteredPositions = companiesPositionsList(cid);

  return (
    <div>
      <h4 className='tab-subtitle'>Nyitott gyakornoki pozícióink</h4>
      <PositionsList positionsList={FilteredPositions} />
    </div>
  );
};

export default CompaniesPos;

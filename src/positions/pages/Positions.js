import React from 'react';

import { POSLIST } from '../../testData/positions';
import PositionsList from '../components/PositionList';

const Positions = () => {
	return (
		<div>
			<PositionsList positions={POSLIST} />
		</div>
	);
};

export default Positions;

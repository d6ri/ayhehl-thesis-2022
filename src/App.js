import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Positions from './positions/pages/Positions.js';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Positions />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

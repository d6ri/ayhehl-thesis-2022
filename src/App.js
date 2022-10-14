import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Positions from './positions/pages/Positions.js';
import MainNav from './positions/components/Nav/MainNav.js';

const App = () => {
	return (
		<BrowserRouter>
			<MainNav />
			<main>
				<Routes>
					<Route path="/" element={<Positions />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;

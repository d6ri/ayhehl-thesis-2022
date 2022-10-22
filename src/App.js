import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Positions from './positions/pages/Positions.js';
import Position from './positions/pages/Position.js';
import Workplace from './workplaces/pages/Workplace.js';
import Auth from './shared/pages/Auth.js';
import NotFound from './shared/pages/NotFound.js';
import MainNav from './positions/components/Nav/MainNav.js';

const App = () => {
	return (
		<BrowserRouter>
			<MainNav />
			<main>
				<Routes>
					<Route path="/" element={<Positions />} />
					<Route path="/positions/:pid" element={<Position />} />
					<Route path="/workplaces/:wid" element={<Workplace />} />
					<Route path="/login" element={<Auth />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;

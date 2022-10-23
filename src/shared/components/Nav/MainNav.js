import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';

const MainNav = props => {
	return (
		<MainHeader>
			<Link to="/">
				<img src="./EKKE.png" height="100px" alt="EKKE" />
				<h1>EKKE Szakmai Gyakorlat Portál</h1>
			</Link>
			<nav>
				<NavLinks />
			</nav>
		</MainHeader>
	);
};

export default MainNav;

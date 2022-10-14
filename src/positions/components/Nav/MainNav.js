import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

const MainNav = props => {
	return (
		<MainHeader>
			<button>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<Link to="/">
				<img src="./EKKE.png" height="100px" />
				<h1>EKKE Szakmai Gyakorlat Portál</h1>
			</Link>
			<nav></nav>
		</MainHeader>
	);
};

export default MainNav;

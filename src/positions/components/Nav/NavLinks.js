import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = props => {
	return (
		<ul>
			<li>
				<NavLink to="/" exact>
					Főoldal
				</NavLink>
			</li>
			<li>
				<NavLink to="/workplaces">Cégek</NavLink>
			</li>
			<li>
				<NavLink to="/">Új értékelés</NavLink>
			</li>
			<li>
				<NavLink to="/login">Bejelentkezés</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;

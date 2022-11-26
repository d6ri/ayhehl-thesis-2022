import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SlGraduation } from 'react-icons/sl';
import { MdLogout } from 'react-icons/md';

import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import { AuthContext } from '../../context/auth-context.js';
import './MainNav.css';

const MainNav = (props) => {
  const auth = useContext(AuthContext);
  return (
    <MainHeader>
      {auth.isLoggedIn && (
        <div className='main-nav__auth'>
          <SlGraduation size='1.5rem' className='user-icon' />
          <p className='username-label'>{auth.username}</p>
          <button onClick={auth.logout} className='btn-logout'>
            <MdLogout size='1.5rem' />
            <span />
          </button>
        </div>
      )}
      <div className='main-nav__title'>
        <Link to='/' id='titleId'>
          <h1>EKKE Szakmai Gyakorlati Portál</h1>
          <img src='./ekke-logo-feher.png' height='100px' alt='EKKE' />
        </Link>
      </div>
      <nav className='main-nav__navlinks'>
        <NavLinks className='main-navigation__header-nav' />
      </nav>
    </MainHeader>
  );
};

export default MainNav;

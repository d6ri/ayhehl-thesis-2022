import React, { useCallback, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Positions from './positions/pages/Positions.js';
import Position from './positions/pages/Position.js';
import Company from './companies/pages/Company.js';
import Companies from './companies/pages/Companies.js';
import Auth from './shared/pages/Auth.js';
import MainNav from './shared/components/Nav/MainNav.js';
import NewReview from './reviews/pages/NewReview.js';
import { AuthContext } from './shared/context/auth-context.js';
import Footer from './shared/components/UI/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const handleLogin = (username) => {
    login();
    setUsername(username);
  };

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path='/' element={<Positions />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/positions/:pid' element={<Position />} />
        <Route path='/companies/:cid' element={<Company />} />
        <Route path='/newreview' element={<NewReview />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/' element={<Positions />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/positions/:pid' element={<Position />} />
        <Route path='/companies/:cid' element={<Company />} />
        <Route path='/login' element={<Auth />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: handleLogin, logout: logout, username: username }}
    >
      <Router basename='/'>
        <MainNav />
        <main>{routes}</main>
      </Router>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;

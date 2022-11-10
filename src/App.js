import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Positions from "./positions/pages/Positions.js";
import Position from "./positions/pages/Position.js";
import Company from "./companies/pages/Company.js";
import Companies from "./companies/pages/Companies.js";
import Auth from "./shared/pages/Auth.js";
import NotFound from "./shared/pages/NotFound.js";
import MainNav from "./shared/components/Nav/MainNav.js";
import NewReview from "./reviews/pages/NewReview.js";

const App = () => {
  return (
    <Router basename='/'>
      <MainNav />
      <main>
        <Routes>
          <Route path='/' element={<Positions />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/positions/:pid' element={<Position />} />
          <Route path='/companies/:cid' element={<Company />} />
          <Route path='/login' element={<Auth />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/newreview' element={<NewReview />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

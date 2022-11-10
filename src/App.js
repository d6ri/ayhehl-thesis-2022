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
  const githubRepoName = "ayhehl-thesis-2022";
  return (
    <Router>
      <MainNav />
      <main>
        <Routes>
          <Route path={`/${githubRepoName}`} element={<Positions />} />
          <Route path={`/${githubRepoName}/companies`} element={<Companies />} />
          <Route path={`/${githubRepoName}/positions/:pid`} element={<Position />} />
          <Route path={`/${githubRepoName}/companies/:cid`} element={<Company />} />
          <Route path={`/${githubRepoName}/login`} element={<Auth />} />
          <Route path='*' element={<NotFound />} />
          <Route path={`/${githubRepoName}/newreview`} element={<NewReview />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

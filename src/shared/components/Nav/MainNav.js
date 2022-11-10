import React, { useContext } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader.js";
import NavLinks from "./NavLinks.js";
import { AuthContext } from "../../context/auth-context.js";

const MainNav = (props) => {
  const auth = useContext(AuthContext);
  return (
    <MainHeader>
      {auth.isLoggedIn && (
        <div>
          <p>{auth.username}</p>
          <button onClick={auth.logout}>Kijelentkezés</button>
        </div>
      )}
      <Link to='/'>
        <img src='./EKKE.png' height='100px' alt='EKKE' />
        <h1>EKKE Szakmai Gyakorlati Portál</h1>
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNav;

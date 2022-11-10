import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul>
      <li>
        <NavLink to='/'>Főoldal</NavLink>
      </li>
      <li>
        <NavLink to='/companies'>Cégek</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to='/newreview'>Új értékelés</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to='/login'>Bejelentkezés</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;

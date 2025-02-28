import { NavLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.authLink, isActive && styles.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;

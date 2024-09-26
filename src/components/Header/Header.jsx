import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  return (
    <nav className={css.container}>
      <Logo />

      <div className={css.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}

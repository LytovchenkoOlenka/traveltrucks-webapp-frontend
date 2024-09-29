import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  return (
    <header className={css.container}>
      <Logo />

      <nav className={css.nav}>
        <NavLink to="/" className={getNavLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClass} end>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

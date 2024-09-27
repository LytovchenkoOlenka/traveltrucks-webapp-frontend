import { NavLink } from "react-router-dom";
import CamperMainDetails from "../../components/CamperMainDetails/CamperMainDetails";
import css from "./DetailsPage.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function DetailsPage() {
  return (
    <>
      <section className={css.pageContainer}>
        <CamperMainDetails />
        <nav className={css.navLink}>
          <NavLink className={getNavLinkClass} to="features">
            Features
          </NavLink>
          <NavLink className={getNavLinkClass} to="reviews">
            Review
          </NavLink>
        </nav>
      </section>
    </>
  );
}

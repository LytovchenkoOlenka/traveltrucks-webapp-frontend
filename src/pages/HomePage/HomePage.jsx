import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.container}>
      <div className={css.contentContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <NavLink className="button" to={"/catalog"}>
          View Now
        </NavLink>
      </div>
    </section>
  );
}

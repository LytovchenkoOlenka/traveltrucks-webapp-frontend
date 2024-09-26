import { Link } from "react-router-dom";
import css from "../Logo/Logo.module.css";
import logo from "/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <img src={logo} alt="Logo TravelTrucks" />
    </Link>
  );
}

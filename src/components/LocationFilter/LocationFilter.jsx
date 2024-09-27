import css from "./LocationFilter.module.css";
import { SlMap } from "react-icons/sl";

export default function LocationFilter() {
  return (
    <div className={css.locationContainer}>
      <label htmlFor="location">Location</label>
      <div className={css.inputWrapper}>
        <input
          className={css.locationInput}
          id="location"
          type="text"
          placeholder="Kyiv, Ukraine"
        />
        <SlMap className={css.mapIcon} />
      </div>
    </div>
  );
}

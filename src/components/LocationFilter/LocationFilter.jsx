import css from "./LocationFilter.module.css";
import { SlMap } from "react-icons/sl";

import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const { location } = useSelector(selectFilters);

  const handleLocationChange = (event) => {
    dispatch(changeLocation(event.target.value));
  };

  return (
    <div className={css.locationContainer}>
      <label htmlFor="location">Location</label>
      <div className={css.inputWrapper}>
        <input
          className={css.locationInput}
          type="text"
          defaultValue={location}
          onChange={handleLocationChange}
          placeholder="Kyiv, Ukraine"
        />
        <SlMap className={css.mapIcon} />
      </div>
    </div>
  );
}

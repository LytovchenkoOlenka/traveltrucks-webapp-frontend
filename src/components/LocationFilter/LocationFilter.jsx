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

  // // Локальний стан для зберігання значення поля вводу
  // const [inputValue, setInputValue] = useState(location); // Ініціалізуємо з поточного значення

  // // Обробка зміни в полі вводу
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value); // Оновлюємо тільки локальний стан
  // };

  // // Обробка натискання кнопки "Search"
  // const handleSearch = () => {
  //   dispatch(changeLocation(inputValue)); // Передаємо значення з локального стану в Redux
  // };

  return (
    <div className={css.locationContainer}>
      <label htmlFor="location">Location</label>
      <div className={css.inputWrapper}>
        <input
          className={css.locationInput}
          // id="location"
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

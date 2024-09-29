import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";
import { selectFiltredCampers } from "../../redux/filters/selectors";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { selectCampers } from "../../redux/filters/selectors";

export default function CampersList() {
  const filteredCampers = useSelector(selectFiltredCampers);
  // const { items } = useSelector(selectCampers);

  const [visibleCount, setVisibleCount] = useState(4); // Початково показуємо 4 картки

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Збільшуємо кількість видимих карток на 4
  };

  return (
    <section className={css.containerCatalog}>
      <ul className={css.campersList}>
        {filteredCampers.length !== 0 ? (
          filteredCampers.slice(0, visibleCount).map((camper) => (
            <li className={css.item} key={camper.id}>
              <CamperCard data={camper} />
            </li>
          ))
        ) : (
          <p>No campers found</p>
        )}
      </ul>

      {visibleCount < filteredCampers.length && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
}

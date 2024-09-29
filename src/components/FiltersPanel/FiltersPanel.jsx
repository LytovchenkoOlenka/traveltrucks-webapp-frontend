import Filter from "../Filter/Filter";
import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./FiltersPanel.module.css";

export default function FiltersPanel() {
  return (
    <section className={css.filtersContainer}>
      <LocationFilter />
      <Filter />
      <button className="button" type="button">
        Search
      </button>
    </section>
  );
}

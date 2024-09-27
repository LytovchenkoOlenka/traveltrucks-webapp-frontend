import Filter from "../Filter/Filter";
import LocationFilter from "../LocationFilter/LocationFilter";
// import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import css from "./FiltersPanel.module.css";

export default function FiltersPanel() {
  return (
    <div className={css.container}>
      <LocationFilter />
      <Filter />
      {/* <VehicleTypeFilter /> */}

      <button className="button" type="button">
        Search
      </button>
    </div>
  );
}

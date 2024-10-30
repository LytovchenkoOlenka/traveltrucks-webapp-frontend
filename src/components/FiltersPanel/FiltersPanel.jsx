import { useState } from "react";
import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./FiltersPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeVehicleEquipment,
  changeVehicleType,
  changeLocation,
} from "../../redux/filters/slice";
import sprite from "../../assets/icons.svg";

import { selectFilters } from "../../redux/filters/selectors";
import clsx from "clsx";

const getActiveClass = (isSelected) => {
  return clsx(css.checkFilter, isSelected && css.active);
};

const iconsMap = {
  AC: "icon-ac",
  TV: "icon-tv",
  Kitchen: "icon-kitchen",
  Bathroom: "icon-bathroom",
  Automatic: "icon-transmission",
  Van: "icon-van",
  "Fully Integrated": "icon-fully",
  Alcove: "icon-alcove",
};

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const { vehicleEquipment, vehicleType } = useSelector(selectFilters);

  const [localEquipment, setLocalEquipment] = useState(vehicleEquipment);
  const [localType, setLocalType] = useState(vehicleType);
  const [localLocation, setLocalLocation] = useState("");

  const handleLocationChange = (newLocation) => {
    setLocalLocation(newLocation);
  };

  const handleEquipmentChange = (event) => {
    const { name, checked } = event.target;
    let updatedEquipment = [...localEquipment];
    if (checked) {
      updatedEquipment.push(name);
    } else {
      updatedEquipment = updatedEquipment.filter((item) => item !== name);
    }
    setLocalEquipment(updatedEquipment);
  };

  const handleTypeChange = (type) => {
    const updatedType = localType === type ? "" : type;
    setLocalType(updatedType);
  };

  const handleSearch = () => {
    dispatch(changeVehicleEquipment(localEquipment));
    dispatch(changeVehicleType(localType));
    dispatch(changeLocation(localLocation));
  };

  return (
    <section className={css.filtersContainer}>
      <LocationFilter
        location={localLocation}
        onLocationChange={handleLocationChange}
      />
      <div className={css.container}>
        <h3 className={css.titleFilters}>Filters</h3>

        {/* Фільтри обладнання */}
        <div className={css.filterWraper}>
          <h4 className={css.title}>Vehicle Equipment</h4>

          <div className={css.filterGroup}>
            {["AC", "TV", "Kitchen", "Bathroom", "Automatic"].map(
              (equipment) => (
                <label
                  className={getActiveClass(localEquipment.includes(equipment))}
                  key={equipment}
                >
                  <input
                    type="checkbox"
                    name={equipment}
                    checked={localEquipment.includes(equipment)}
                    onChange={handleEquipmentChange}
                  />
                  <svg className={css.icon}>
                    <use href={`${sprite}#${iconsMap[equipment]}`} />
                  </svg>
                  {equipment}
                </label>
              )
            )}
          </div>
        </div>

        {/* Фільтри типу транспортного засобу */}

        <div className={css.filterWraper}>
          <h4 className={css.title}>Vehicle Type</h4>

          <div className={css.filterGroup}>
            {["Van", "Fully Integrated", "Alcove"].map((type) => (
              <button
                key={type}
                type="button"
                className={getActiveClass(localType === type)}
                onClick={() => handleTypeChange(type)}
              >
                <svg className={css.icon}>
                  <use href={`${sprite}#${iconsMap[type]}`} />
                </svg>
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="button" type="button" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
}

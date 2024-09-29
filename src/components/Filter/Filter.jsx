import css from "./Filter.module.css";
import clsx from "clsx";

const getActiveClass = (isSelected) => {
  return clsx(css.checkFilter, isSelected && css.active);
};

export default function Filter({
  selectedEquipment,
  onEquipmentChange,
  selectedType,
  onTypeChange,
}) {
  const handleEquipmentChange = (event) => {
    const { name, checked } = event.target;
    let updatedEquipment = [...selectedEquipment];
    if (checked) {
      updatedEquipment.push(name);
    } else {
      updatedEquipment = updatedEquipment.filter((item) => item !== name);
    }
    onEquipmentChange(updatedEquipment);
  };

  const handleTypeChange = (type) => {
    const updatedType = selectedType === type ? "" : type;
    onTypeChange(updatedType);
  };

  return (
    <div className={css.container}>
      <h3 className={css.titleFilters}>Filters</h3>

      {/* Фільтри обладнання */}
      <div className={css.filterWraper}>
        <h4 className={css.title}>Vehicle Equipment</h4>

        <div className={css.filterGroup}>
          {/* Динамічний рендер чекбоксів */}
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((equipment) => (
            <label
              className={getActiveClass(selectedEquipment.includes(equipment))}
              key={equipment}
            >
              <input
                type="checkbox"
                name={equipment}
                checked={selectedEquipment.includes(equipment)}
                onChange={handleEquipmentChange}
              />
              {equipment}
            </label>
          ))}
        </div>
      </div>

      {/* Фільтри типу транспортного засобу */}

      <div className={css.filterWraper}>
        <h4 className={css.title}>Vehicle Type</h4>

        <div className={css.filterGroup}>
          {/* Динамічний рендер кнопок */}

          {["Van", "Fully Integrated", "Alcove"].map((type) => (
            <button
              key={type}
              type="button"
              className={getActiveClass(selectedType === type)}
              onClick={() => handleTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

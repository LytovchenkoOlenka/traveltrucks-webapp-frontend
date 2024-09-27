import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={css.container}>
      <h3 className={css.titleFilters}>Filters</h3>
      {/* Фільтри обладнання */}

      <div className={css.filterWraper}>
        <h4 className={css.title}>Vehicle Equipment</h4>

        <div className={css.filterGroup}>
          <label className={css.checkFilter}>
            <input type="checkbox" name="AC" /> AC
          </label>

          <label className={css.checkFilter}>
            <input type="checkbox" name="automatic" />
            Automatic
          </label>

          <label className={css.checkFilter}>
            <input type="checkbox" name="kitchen" />
            Kitchen
          </label>

          <label className={css.checkFilter}>
            <input type="checkbox" name="TV" /> TV
          </label>

          <label className={css.checkFilter}>
            <input type="checkbox" name="hb" /> HB
          </label>
        </div>
      </div>

      {/* Фільтри типу транспортного засобу */}

      <div className={css.filterWraper}>
        <h4 className={css.title}>Vehicle Type</h4>

        <div className={css.filterGroup}>
          <button type="button" className={css.checkFilter}>
            Van
          </button>
          <button type="button" className={css.checkFilter}>
            Fully Integrated
          </button>
          <button type="button" className={css.checkFilter}>
            Alcove
          </button>
        </div>
      </div>
    </div>
  );
}

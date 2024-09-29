import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";

import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/filters/selectors";

export default function CampersList() {
  const { items } = useSelector(selectCampers);

  return (
    <section className={css.containerCatalog}>
      <ul className={css.campersList}>
        {items.length !== 0 ? (
          items.map((camper) => (
            <li className={css.item} key={camper.id}>
              <CamperCard data={camper} />
            </li>
          ))
        ) : (
          <p>No campers found</p>
        )}
      </ul>
      <button className={css.button}>Load more</button>
    </section>
  );
}

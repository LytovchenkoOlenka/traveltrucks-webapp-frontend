import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";
import { selectFiltredCampers } from "../../redux/filters/selectors";
import { useSelector } from "react-redux";

export default function CampersList() {
  const filteredCampers = useSelector(selectFiltredCampers);

  return (
    <section className={css.containerCatalog}>
      <ul className={css.campersList}>
        {filteredCampers.length !== 0 ? (
          filteredCampers.map((camper) => (
            <li className={css.item} key={camper.id}>
              <CamperCard data={camper} />
            </li>
          ))
        ) : (
          <p>No campers found</p>
        )}
      </ul>
    </section>
  );
}

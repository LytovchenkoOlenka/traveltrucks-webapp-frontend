import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <section className={css.containerCatalog}>
      <ul className={css.campersList}>
        {campers.length !== 0 ? (
          campers.map((camper) => (
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

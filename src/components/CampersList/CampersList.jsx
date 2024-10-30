import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";
import Loader from "../Loader/Loader";
import { selectFiltredCampers } from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/campers/selectors";

export default function CampersList() {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFiltredCampers);
  const isLoading = useSelector(selectLoading);
  const { page, total, perPage, items } = useSelector((state) => state.campers);

  const handleLoadMore = () => {
    if (items.length < total) {
      const nextPage = page + 1;
      dispatch(fetchCampers({ page: nextPage, perPage }));
    }
  };

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

      {items.length < total && (
        <button className={css.button} onClick={handleLoadMore}>
          {isLoading ? <Loader /> : "Load more"}
        </button>
      )}
    </section>
  );
}

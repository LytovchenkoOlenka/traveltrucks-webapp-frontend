import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";
import Loader from "../../components/Loader/Loader";

import { fetchCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading } from "../../redux/campers/selectors";
// import { selectFiltredCampers } from "../../redux/filters/selectors";

import { addToFavorites } from "../../redux/favorites/slice";

export default function CatalogPage() {
  // const filteredCampers = useSelector(selectFiltredCampers);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { page, total, perPage, items } = useSelector((state) => state.campers);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCampers({ page, perPage }));
    }

    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites && Array.isArray(savedFavorites)) {
      savedFavorites.forEach((favorite) => dispatch(addToFavorites(favorite)));
    }
  }, [dispatch, items.length, perPage, page]);

  const handleLoadMore = () => {
    if (items.length < total) {
      dispatch(fetchCampers({ page: page + 1, perPage }));
    }
  };

  return (
    <div className={css.pageContainer}>
      <FiltersPanel />
      <div className={css.camperListContainer}>
        <CampersList />
        {isLoading ? (
          <Loader />
        ) : (
          items.length < total && (
            <button className={css.button} onClick={handleLoadMore}>
              Load more
            </button>
          )
        )}
      </div>
    </div>
  );
}

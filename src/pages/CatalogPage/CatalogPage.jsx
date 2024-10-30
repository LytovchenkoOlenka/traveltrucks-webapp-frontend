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
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  // const filteredCampers = useSelector(selectFiltredCampers);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, perPage: 4 }));

    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites && Array.isArray(savedFavorites)) {
      savedFavorites.forEach((favorite) => dispatch(addToFavorites(favorite)));
    }
  }, [dispatch]);

  return (
    <div className={css.pageContainer}>
      <FiltersPanel />
      {isLoading ? <Loader /> : <CampersList />}
    </div>
  );
}

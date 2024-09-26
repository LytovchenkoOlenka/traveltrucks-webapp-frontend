import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";

export default function CatalogPage() {
  return (
    <>
      <div className={css.generalContainer}>
        <div className={css.firthCont}>Локація і фільтр</div>
        <div className={css.secondCont}>
          <CampersList />
        </div>
      </div>
    </>
  );
}

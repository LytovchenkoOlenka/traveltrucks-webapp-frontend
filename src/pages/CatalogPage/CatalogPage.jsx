import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";

export default function CatalogPage() {
  return (
    <section className={css.pageContainer}>
      <FiltersPanel />
      <CampersList />
    </section>
  );
}

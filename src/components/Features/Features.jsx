import css from "./Features.module.css";
import FeaturesList from "../FeaturesList/FeaturesList";

export default function Features() {
  return (
    <div className={css.featuresContainer}>
      <FeaturesList />
      <div className={css.empty}></div>
      <h4 className={css.title}>Vehicle details</h4>
      <dl className={css.detailsList}>
        <dt className={css.detailLabel}>Form</dt>
        <dd className={css.detailValue}>Panel truck</dd>

        <dt className={css.detailLabel}>Length</dt>
        <dd className={css.detailValue}>5.4 m</dd>

        <dt className={css.detailLabel}>Width</dt>
        <dd className={css.detailValue}>2.01 m</dd>

        <dt className={css.detailLabel}>Height</dt>
        <dd className={css.detailValue}>2.05 m</dd>

        <dt className={css.detailLabel}>Tank</dt>
        <dd className={css.detailValue}>132 l</dd>

        <dt className={css.detailLabel}>Consumption</dt>
        <dd className={css.detailValue}>12.4 l/100km</dd>
      </dl>
    </div>
  );
}

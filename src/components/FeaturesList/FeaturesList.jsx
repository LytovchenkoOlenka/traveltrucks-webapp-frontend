import css from "./FeaturesList.module.css";

export default function FeaturesList({ data }) {
  const {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = data;

  const features = {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const filtredFeatures = Object.keys(features).filter((key) => features[key]);
  return (
    <>
      <ul className={css.featuresList}>
        {filtredFeatures.map((feature) => (
          <li key={feature} className={css.featuresItem}>
            <p className={css.featureText}>{feature}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

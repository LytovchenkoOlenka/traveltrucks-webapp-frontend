import css from "./FeaturesList.module.css";

export default function FeaturesList({ data }) {
  const { AC, bathroom, kitchen, TV, radio, gas, transmission, engine } = data;

  const features = {
    AC: AC ? "AC" : null,
    bathroom: bathroom ? "Bathroom" : null,
    kitchen: kitchen ? "Kitchen" : null,
    TV: TV ? "TV" : null,
    radio: radio ? "Radio" : null,
    gas: gas ? "Gas" : null,
    automatic: transmission === "automatic" ? "Automatic" : null,
    manual: transmission === "manual" ? "Manual" : null,
    petrol: engine === "petrol" ? "Petrol" : null,
    diesel: engine === "diesel" ? "Diesel" : null,
    hybrid: engine === "hybrid" ? "Hybrid" : null,
  };

  const filteredFeatures = Object.values(features).filter((feature) => feature);

  return (
    <>
      <ul className={css.featuresList}>
        {filteredFeatures.map((feature) => (
          <li key={feature} className={css.featuresItem}>
            <p className={css.featureText}>{feature}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

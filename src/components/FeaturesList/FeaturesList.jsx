import css from "./FeaturesList.module.css";

const data = {
  name: "Road Bear C 23-25",
  price: 10000,
  rating: 4.5,
  location: "Ukraine, Kyiv",
  description:
    "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
  form: "alcove",
  length: "7.3m",
  width: "2.65m",
  height: "3.65m",
  tank: "208l",
  consumption: "30l/100km",
  transmission: "automatic",
  engine: "diesel",
  AC: true,
  bathroom: true,
  kitchen: false,
  TV: true,
  radio: true,
  refrigerator: false,
  microwave: true,
  gas: false,
  water: true,
};

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

console.log(filtredFeatures);

export default function FeaturesList() {
  <>
    <ul className={css.featuresList}>
      {filtredFeatures.map((feature) => (
        <li key={feature} className={css.featuresItem}>
          <p className={css.featureText}>{feature}</p>
        </li>
      ))}
    </ul>
  </>;
}

import css from "./CamperCard.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
// import { MdEuroSymbol } from "react-icons/md";
import { SlMap } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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

export default function CamperCard() {
  return (
    <div className={css.containerCard}>
      <img src="/Pic.jpg" alt="" />

      <div className={css.camperInfo}>
        <div>
          <div className={css.mainInfo}>
            <h2 className={css.title}>{data.name}</h2>
            <span className={css.priceAndFavourite}>
              {/* <MdEuroSymbol /> */}
              <p>€{data.price}</p>
              <IoMdHeartEmpty className={css.heart} />
            </span>
          </div>

          <div className={css.containerRatingLocation}>
            <span className={css.rateAndLocation}>
              <FaStar className={css.star} />
              <p className={css.textRating}>{data.rating}(2 Reviews)</p>
            </span>
            <span className={css.rateAndLocation}>
              <SlMap />
              <p className={css.textLocation}>{data.location}</p>
            </span>
          </div>
        </div>

        <p className={css.description}>{data.description}</p>

        <ul className={css.featuresList}>
          {filtredFeatures.map((feature) => (
            <li key={feature} className={css.featuresItem}>
              <p className={css.featureText}>{feature}</p>
            </li>
          ))}
        </ul>

        <Link className="button" to={`/catalog/{data.id}`}>
          Show More
        </Link>
      </div>
    </div>
  );
}

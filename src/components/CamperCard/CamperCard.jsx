import css from "./CamperCard.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlMap } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import FeaturesList from "../FeaturesList/FeaturesList";
import { formatLocation, formatPrice } from "../../utils/formatters";

export default function CamperCard({ data }) {
  const image = data.gallery[0];

  return (
    <div className={css.containerCard}>
      <img className={css.mainImage} src={image.thumb} alt="" />

      <div className={css.camperInfo}>
        <div>
          <div className={css.mainInfo}>
            <h2 className={css.title}>{data.name}</h2>
            <span className={css.priceAndFavourite}>
              <p>€{formatPrice(data.price)}</p>
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
              <p className={css.textLocation}>
                {formatLocation(data.location)}
              </p>
            </span>
          </div>
        </div>

        <p className={css.description}>{data.description}</p>

        <FeaturesList data={data} />
        {/* <ul className={css.featuresList}>
          {filtredFeatures.map((feature) => (
            <li key={feature} className={css.featuresItem}>
              <p className={css.featureText}>{feature}</p>
            </li>
          ))}
        </ul> */}

        <a
          className="button"
          href={`/catalog/${data.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show More
        </a>
      </div>
    </div>
  );
}

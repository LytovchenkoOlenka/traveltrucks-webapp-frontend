import css from "./CamperCard.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlMap } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import FeaturesList from "../FeaturesList/FeaturesList";
import { formatLocation, formatPrice } from "../../utils/formatters";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

import clsx from "clsx";

//Додається у обране, але одразу, а не після перезавантаження. На доробці.
export default function CamperCard({ data }) {
  const image = data.gallery[0];
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const isFavorite = favorites.some((camper) => camper.id === data.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: data.id }));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <div className={css.containerCard}>
      <img className={css.mainImage} src={image.thumb} alt="" />

      <div className={css.camperInfo}>
        <div>
          <div className={css.mainInfo}>
            <h2 className={css.title}>{data.name}</h2>
            <span className={css.priceAndFavourite}>
              <p>€{formatPrice(data.price)}</p>
              <IoMdHeartEmpty
                onClick={handleFavoriteClick}
                className={clsx(css.heart, isFavorite && css.activeHeart)}
              />
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

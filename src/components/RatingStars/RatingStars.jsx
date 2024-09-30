import { FaStar } from "react-icons/fa";
import css from "./RatingStars.module.css";
import clsx from "clsx";

export default function RatingStars({ rating }) {
  const totalStars = 5;

  return (
    <div className={css.starsContainer}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1;
        return (
          <FaStar
            key={starNumber}
            className={clsx(css.star, {
              [css.filledStar]: starNumber <= rating,
              [css.emptyStar]: starNumber > rating,
            })}
          />
        );
      })}
    </div>
  );
}

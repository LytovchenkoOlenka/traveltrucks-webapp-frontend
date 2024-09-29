import css from "./Reviews.module.css";

const data = {
  reviews: [
    {
      reviewer_name: "Alice",
      reviewer_rating: 5,
      comment:
        "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!",
    },
    {
      reviewer_name: "Bob",
      reviewer_rating: 4,
      comment:
        "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.",
    },
  ],
};

// Оцінка зірочками на доробці.
export default function Reviews() {
  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {data.reviews.map((review, index) => (
          <li key={index} className={css.reviewsItem}>
            <div className={css.review}>
              <div className={css.avatar}>
                {review.reviewer_name.split("")[0]}
              </div>
              <div className={css.reviewerName}>
                <h3 className={css.name}>{review.reviewer_name}</h3>
                <p className={css.rating}>{review.reviewer_rating}</p>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

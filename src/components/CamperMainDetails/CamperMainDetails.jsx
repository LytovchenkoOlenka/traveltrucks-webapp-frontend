import css from "./CamperMainDetails.module.css";
import { SlMap } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

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
  gallery: [
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
      original: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
    },
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
      original: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
    },
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
      original: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
    },
    {
      thumb: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
      original: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
    },
  ],
};

export default function CamperMainDetails() {
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.title}>{data.name}</h2>

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
        <p className={css.price}>€{data.price}</p>
      </div>

      <ul className={css.gallery}>
        {data.gallery.map((image, index) => (
          <li key={index} className={css.galleryItem}>
            <img
              src={image.thumb}
              alt={`Thumbnail ${index + 1}`}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>

      <p className={css.description}>{data.description}</p>
    </div>
  );
}

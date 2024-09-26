// import { Link } from "react-router-dom";
import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";

export default function CampersList() {
  return (
    <div>
      <div className={css.containerCatalog}>
        <CamperCard />
        <CamperCard />
        <CamperCard />
        <CamperCard />
      </div>
      <button className={css.button}>Load more</button>
    </div>
  );
}

// export default function CampersList({ campers }) {
//   return (
//     <div className={css.containerCatalog}>
//       <ul className={css.list}>
//         {campers.map((camper) => (
//           <li className={css.item} key={camper.id}>
//             <Link className={css.cardLink} to={`/catalog/${camper.id}`}>
//               <CamperCard data={camper}/>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

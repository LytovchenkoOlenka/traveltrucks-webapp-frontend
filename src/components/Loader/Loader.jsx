import css from "./Loader.module.css";
// import Lottie from "lottie-react";
// import carAnimation from "../../assets/Animation - 1727277024238.json";
import { Vortex } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "yellow", "gray", "red", "yellow", "gray"]}
      />
    </div>
  );
}

//   <div className={css.loader}>
//     <Lottie animationData={carAnimation} loop />
//   </div>;

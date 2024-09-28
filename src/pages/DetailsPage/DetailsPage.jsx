import CamperMainDetails from "../../components/CamperMainDetails/CamperMainDetails";
import CamperAdditionalDetails from "../../components/CamperAdditionalDetails/CamperAdditionalDetails";
// import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  return (
    <>
      {/*<div className={css.pageContainer}></div> */}
      <CamperMainDetails />
      <CamperAdditionalDetails />
      {/* </div> */}
    </>
  );
}

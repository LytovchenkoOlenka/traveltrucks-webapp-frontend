import css from "./DetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import CamperMainDetails from "../../components/CamperMainDetails/CamperMainDetails";
import CamperAdditionalDetails from "../../components/CamperAdditionalDetails/CamperAdditionalDetails";

import { getCamperById } from "../../redux/campers/operations";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/filters/selectors";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const { currentCamper } = useSelector(selectCampers);

  return (
    <div className={css.pageContainer}>
      {currentCamper ? (
        <>
          <CamperMainDetails data={currentCamper} />
          <CamperAdditionalDetails data={currentCamper} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers;
export const selectFilters = (state) => state.filters;
export const selectCampersInfo = (state) => state.campers.items;

export const selectFiltredCampers = createSelector(
  [selectCampersInfo, selectFilters],
  (campers, filters) => {
    const { location, vehicleEquipment, vehicleType } = filters;

    const lowerCaseLocation = location.trim().toLowerCase();
    const lowerCaseEquipment = vehicleEquipment.map((item) =>
      item.toLowerCase()
    );
    const lowerCaseVehicleType = vehicleType.toLowerCase();

    let filteredCampers = campers;

    if (lowerCaseLocation) {
      filteredCampers = filteredCampers.filter((camper) =>
        camper.location.toLowerCase().includes(lowerCaseLocation)
      );
    }

    if (lowerCaseEquipment.length > 0) {
      filteredCampers = filteredCampers.filter((camper) =>
        lowerCaseEquipment.every(
          (equipment) => camper[equipment.toLowerCase()] === true
        )
      );
    }

    if (lowerCaseVehicleType.length > 0) {
      filteredCampers = filteredCampers.filter(
        (camper) => camper.form.toLowerCase() === lowerCaseVehicleType
      );
    }

    return filteredCampers;
  }
);

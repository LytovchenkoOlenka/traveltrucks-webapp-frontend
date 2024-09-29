import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers;
export const selectFilters = (state) => state.filters;
export const selectCampersInfo = (state) => state.campers.items;

export const selectFiltredCampers = createSelector(
  [selectCampersInfo, selectFilters],
  (campers, filters) => {
    const { location, vehicleEquipment, vehicleType } = filters;

    let filteredCampers = campers;

    if (location.trim() !== "") {
      const lowerCaseQuery = location.toLowerCase();
      filteredCampers = filteredCampers.filter((camper) =>
        camper.location.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (vehicleEquipment.length > 0) {
      filteredCampers = filteredCampers.filter((camper) =>
        vehicleEquipment.every((equipment) => camper[equipment] === true)
      );
    }

    if (vehicleType.length > 0) {
      filteredCampers = filteredCampers.filter((camper) =>
        vehicleType.includes(camper.form)
      );
    }

    return filteredCampers;
  }
);

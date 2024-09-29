// import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers;
export const selectUsersQuery = (state) => state.filters.status;

// export const selectFiltredContacts = createSelector(
//   [selectCampers, selectUsersQuery],
//   (campers, query) => {
//     const lowerCaseQuery = query.toLowerCase();
//     return campers.filter(
//       (camper) =>
//         // contact.name.toLowerCase().includes(lowerCaseQuery) ||
//         // contact.number.toLowerCase().includes(lowerCaseQuery)
//     );
//   }
// );

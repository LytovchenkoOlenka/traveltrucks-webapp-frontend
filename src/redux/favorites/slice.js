import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    // дія видалення із стану, на випадок, якщо треба буде напряму змінювати стан
    // removeFromFavorites: (state, action) => {
    //   const camperId = action.payload.id;
    //   state.favorites = state.favorites.filter(
    //     (camper) => camper.id !== camperId
    //   );
    // },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

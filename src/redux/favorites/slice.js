import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload.id;
      state.favorites = state.favorites.filter(
        (camper) => camper.id !== camperId
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleEquipment: [],
    vehicleType: "",
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeVehicleEquipment: (state, action) => {
      state.vehicleEquipment = action.payload;
    },
    changeVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { changeLocation, changeVehicleEquipment, changeVehicleType } =
  filtersSlice.actions;
export default filtersSlice.reducer;

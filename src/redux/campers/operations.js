import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const createFilterParams = (filters) => {
  const params = new URLSearchParams();
  if (filters.location) params.append("location", filters.location);
  if (filters.vehicleType) params.append("form", filters.vehicleType);

  filters.vehicleEquipment.forEach((equipment) => {
    params.append(equipment, "true");
  });
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, perPage }, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = state.filters;
    const filterParams = createFilterParams(filters);

    try {
      const response = await axios.get(
        `/campers?page=${page}&limit=${perPage}&${filterParams}`
      );
      return { items: response.data.items, total: response.data.total, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const responce = await axios.get(`/campers/${id}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

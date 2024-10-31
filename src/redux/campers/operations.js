import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, perPage, filters }, thunkAPI) => {
    // Копіюємо об'єкт фільтрів та видаляємо порожні значення
    const filterParamsObj = { ...filters };

    // Обробка параметра vehicleEquipment, щоб створити окремі параметри для кожного обладнання
    if (filters.vehicleEquipment) {
      filters.vehicleEquipment.forEach((equipment) => {
        filterParamsObj[equipment] = true;
      });
      delete filterParamsObj.vehicleEquipment; // Видаляємо оригінальний масив
    }

    // Видаляємо ключі з порожніми значеннями
    Object.keys(filterParamsObj).forEach((key) => {
      if (filterParamsObj[key] === "" || filterParamsObj[key] === undefined) {
        delete filterParamsObj[key];
      }
    });

    const filterParams = new URLSearchParams(filterParamsObj).toString();

    try {
      const response = await axios.get(
        `/campers?page=${page}&limit=${perPage}${
          filterParams ? `&${filterParams}` : ""
        }`
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

// const createFilterParams = (filters) => {
//   const params = new URLSearchParams();
//   if (filters.location) params.append("location", filters.location);
//   if (filters.vehicleType) params.append("form", filters.vehicleType);

//   filters.vehicleEquipment.forEach((equipment) => {
//     params.append(equipment, "true");
//   });
// };

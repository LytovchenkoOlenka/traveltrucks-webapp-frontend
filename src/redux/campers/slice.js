import { createSlice } from "@reduxjs/toolkit";

const campersSlice = createSlice({
  name: "campers",
  initialState: { items: [] },
  reducers: {
    // addTask: (state, action) => {},
    // deleteTask: (state, action) => {},
    // toggleCompleted: (state, action) => {},
  },
});

// Експортуємо фабрики екшенів { addTask, deleteTask, toggleCompleted }
// export const {} = slice.actions;

export default campersSlice.reducer;

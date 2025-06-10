import { createSlice } from "@reduxjs/toolkit";
import { getCurrentRecord, saveToLocalStorage } from "../util/localData";
export const RecordSlice = createSlice({
  name: "record",
  initialState: {
    selectedDate: "",
    currentList: [],
  },
  reducers: {
    setCurentList: (state, action) => {
      if (action.payload) {
        //typeId, idx
        const { typeId, idx } = action.payload;
        state.currentList[idx] = typeId;
        saveToLocalStorage(state.selectedDate, state.currentList);
      }
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.currentList = getCurrentRecord(action.payload);
    },
  },
});
export const { setCurentList, setSelectedDate } = RecordSlice.actions;
export default RecordSlice.reducer;

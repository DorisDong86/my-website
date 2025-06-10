import { configureStore } from "@reduxjs/toolkit";
import typeReducer from "./TypeSlice";
import recordReducer from "./RecordSlice";

export default configureStore({
    reducer: {
      type: typeReducer,
      record: recordReducer,
    },
  });
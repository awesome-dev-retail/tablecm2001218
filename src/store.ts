import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import areaReducer from "./slices/areaSlice";

export default configureStore({
  reducer: {
    Auth: authReducer,
    Area: areaReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["area/fetchAreaList/fulfilled", "area/saveArea/fulfilled", "area/deleteArea/fulfilled"],
      // ignoredActions: ["user/fetchUser/fulfilled"],
    },
  }),
});

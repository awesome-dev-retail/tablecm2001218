import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import areaReducer from "./slices/areaSlice";
import tableReducer from "./slices/tableSlice";

export default configureStore({
  reducer: {
    Auth: authReducer,
    Area: areaReducer,
    Table: tableReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "area/fetchAreaList/fulfilled",
        "area/saveArea/fulfilled",
        "area/deleteArea/fulfilled",
        "table/saveTable/fulfilled",
        "table/deleteTable/fulfilled",
        "table/fetchTableListInShop/fulfilled",
        "table/fetchTableListInArea/fulfilled",
      ],
      // ignoredActions: ["user/fetchUser/fulfilled"],
    },
  }),
});

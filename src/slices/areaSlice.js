import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../configs/index";
// import { CacheStorage, message } from "../lib";
import { areaListRequest } from "../services";
import axios from "axios";
// import { history } from "../App";

const initialState = {
  area: null,
  addedArea: null,
  status: "",
  error: null,
};

// export const areaListRequest = (shopId: any) => {
//   return api.request({
//     url: `/pos/data/area/list_in_shop?shopId=${shopId}`,
//     method: "get",
//     headers: {
//       Authorization: "2fse783mcEIlui4pN5i7WQ==",
//     },
//   });
// };

export const fetchAreaList = createAsyncThunk("area/fetchAreaList", async (id, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `https://pos-restaurant-be-dev.azurewebsites.net/pos/data/area/list_in_shop?shopId=${id}`,
      headers: { Authorization: "Bearer YwsYAnsCInI-buw54nC2xg==" },
    });
    if (res.error) throw res.error;
    console.log("fetchAreaList--------------", res);

    return res;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const addArea = createAsyncThunk("area/addArea", async (areaObj, { rejectWithValue }) => {
  try {
    console.log("createAsyncThunk addArea", areaObj);
    const res = await axios({
      url: "https://pos-restaurant-be-dev.azurewebsites.net/pos/data/area/save",
      headers: { Authorization: "Bearer YwsYAnsCInI-buw54nC2xg==" },
      // params: areaObj,
      // paramsSerializer: function (params) {
      //   return Qs.stringify(params, { arrayFormat: "brackets" });
      // },
    });
    console.log("addArea--------------", res);
    if (res.error) throw res.error;
    return res;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

const AreaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAreaList.pending]: (state) => {
      state.status = config.API_STATUS.LOADING;
    },
    [fetchAreaList.fulfilled]: (state, action) => {
      state.status = config.API_STATUS.SUCCEEDED;
      state.area = action.payload.data.data.list;
      state.error = null;
      // state.token = action.payload.token;
      // CacheStorage.setItem(config.TOKEN_SYMBOL, action.payload.token);
      // CacheStorage.setItem(config.TOKEN_IS_ADMIN, false);
    },
    [fetchAreaList.rejected]: (state, action) => {
      state.status = config.API_STATUS.FAILED;
      message.error(action.payload);
    },
    [addArea.pending]: (state) => {
      state.status = config.API_STATUS.LOADING;
    },
    [addArea.fulfilled]: (state, action) => {
      state.status = config.API_STATUS.SUCCEEDED;
      state.addedArea = action.payload;
      state.error = null;
      // state.token = action.payload.token;
      // CacheStorage.setItem(config.TOKEN_SYMBOL, action.payload.token);
      // CacheStorage.setItem(config.TOKEN_IS_ADMIN, false);
    },
    [addArea.rejected]: (state, action) => {
      state.status = config.API_STATUS.FAILED;
      message.error(action.payload);
    },
  },
});

export const selectAreaList = (state) => state.Area.area;

export default AreaSlice.reducer;

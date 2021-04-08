import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import CONSTANT from "../configs/CONSTANT";
import { loginRequest } from "../services";
import { UserCredential } from "../configs/data";

interface UserAttributes {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
}

const initialState = {
    user: null,
    token: null,
    status: CONSTANT.API_STATUS.IDLE,
    error: null
}

export const loginToServer = createAsyncThunk('user/login',async (data: UserCredential, {rejectWithValue}) => {
    try {
        const res = await loginRequest(data)
        console.log(res)
        return res
    } catch (e) {
        return rejectWithValue(e.message)
    }
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(loginToServer.pending, state => {
            state.status = CONSTANT.API_STATUS.LOADING
        })
        builder.addCase(loginToServer.fulfilled, (state, action) => {
            state.status = CONSTANT.API_STATUS.SUCCEEDED
            state.user = action.payload.data
            //Extract token store token
        })
        // Error handle
    }
})

export default authSlice.reducer
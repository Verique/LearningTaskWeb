import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { WritableDraft } from "immer/dist/internal";
import { AuthState } from "../../types/AuthState";
import { auth } from "../action-creators/Auth";

const initialState: AuthState = {
    isWaiting: false,
    isLogged: false,
    jwt: ""
}

export const authSlice = createSlice({
    name: "auth",
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(auth.fulfilled, (state, action) => {
            state.jwt = action.payload;
            state.isLogged = true;
            state.isWaiting = false;
        })
        builder.addCase(auth.pending, (state) => {
            state.isWaiting = true;
        })
        builder.addCase(auth.rejected, (state, action) => {
            state.isWaiting = false;
        })
    }
})


export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/AuthState";
import { auth } from "../action-creators/Auth";

const initialState: AuthState = {
    isWaiting: false,
    isLogged: false,
    jwt: ""
}

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        logout: (state) => {
            state.isLogged = false;
            state.jwt = "";
        },
        login: (state, action) => {
            state.isLogged = true;
            state.jwt = action.payload;
        }
    },
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
export const { logout, login } = authSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../action-creators/Auth";
import { AuthState } from "../interfaces/AuthState";

const initialState: AuthState = {
    isWaiting: false,
    isLogged: false,
    isReadingLocal: true
}

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        logout: (state) => {
            state.isLogged = false;
        },
        loginFromLocal: (state, action) => {
            state.isLogged = action.payload;
            state.isReadingLocal = false;
        }
    },
    initialState,
    extraReducers: (builder) => {
        builder.addCase(auth.fulfilled, (state) => {
            state.isLogged = true;
            state.isWaiting = false;
        })
        builder.addCase(auth.pending, (state) => {
            state.isWaiting = true;
        })
        builder.addCase(auth.rejected, (state) => {
            state.isWaiting = false;
        })
    }
})


export default authSlice.reducer;
export const { logout, loginFromLocal } = authSlice.actions;

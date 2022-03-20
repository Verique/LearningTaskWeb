import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../action-creators/Auth";
import { AuthState } from "../interfaces/AuthState";

const initialState: AuthState = {
    isWaiting: false,
    isLogged: false,
}

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        logout: (state) => {
            state.isLogged = false;
        },
        login: (state) => {
            state.isLogged = true;
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
export const { logout, login } = authSlice.actions;

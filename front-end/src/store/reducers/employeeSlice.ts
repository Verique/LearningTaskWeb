import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeState } from "../../types/employeeState";
import { fetchEmployees } from "../action-creators/employee";

const initialState: EmployeeState = {
    employees: [],
    isFetching: false,
    error: ""
}

const employeeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload;
            state.error = "";
            state.isFetching = false;
        });
        builder.addCase(fetchEmployees.pending, (state) => {
            state.error = "";
            state.isFetching = true;
        });
        builder.addCase(fetchEmployees.rejected, (state, action) => {
            state.error = action.error.message ? action.error.message : "";
            state.isFetching = false;
        });
    }
});

export const { } = employeeSlice.actions;
export default employeeSlice.reducer;
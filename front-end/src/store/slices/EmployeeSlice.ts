import { createSlice } from "@reduxjs/toolkit";
import { ColumnNames } from "../../types/ColumnsNames";
import { EmployeeState } from "../../types/EmployeeState";
import { fetchEmployees } from "../action-creators/Employee";

const initialState: EmployeeState = {
    employees: [],
    isFetching: false,
    error: "",
    totalPages: 0,
    viewParams: {
        page: 0,
        orderby: ColumnNames.id,
        descending: false
    }
}

const employeeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        nextPage: (state) => { state.viewParams.page++ },
        prevPage: (state) => { state.viewParams.page-- },
        setOrderBy: (state, action) => {
            if (state.viewParams.orderby === action.payload) {
                state.viewParams.descending = !state.viewParams.descending
            } else {
                state.viewParams.orderby = action.payload;
                state.viewParams.descending = false;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload.employees;
            state.totalPages = action.payload.pageCount;
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

export default employeeSlice.reducer;
export const { nextPage, prevPage, setOrderBy } = employeeSlice.actions;
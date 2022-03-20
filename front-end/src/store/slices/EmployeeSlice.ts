import { createSlice } from "@reduxjs/toolkit";
import { ColumnNames } from "../../interfaces/ColumnsNames";
import { EmployeeState } from "../interfaces/EmployeeState";
import deleteEmployeeReducer from "../reducers/deleteEmployeeReducer";
import fetchEmployeesReducer from "../reducers/fetchEmployeesReducer";

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
        changePage: (state, action) => { state.viewParams.page = action.payload },
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
        fetchEmployeesReducer(builder);
        deleteEmployeeReducer(builder);
    }
});

export default employeeSlice.reducer;
export const { changePage, setOrderBy } = employeeSlice.actions;
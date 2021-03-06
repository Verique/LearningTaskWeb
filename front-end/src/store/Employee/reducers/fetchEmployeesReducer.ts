import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchEmployees } from "../Employee";
import { EmployeeState } from "../interfaces/EmployeeState";

const fetchEmployeesReducer = (
  builder: ActionReducerMapBuilder<EmployeeState>
) => {
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
};

export default fetchEmployeesReducer;

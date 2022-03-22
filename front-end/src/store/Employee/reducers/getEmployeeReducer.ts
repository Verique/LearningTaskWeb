import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getEmployee } from "../Employee";
import { EmployeeState } from "../interfaces/EmployeeState";

const getEmployeeReducer = (
  builder: ActionReducerMapBuilder<EmployeeState>
) => {
  builder.addCase(getEmployee.fulfilled, (state, action) => {
    state.currentEmployee = action.payload;
    state.error = "";
    state.isFetching = false;
  });
  builder.addCase(getEmployee.pending, (state) => {
    state.currentEmployee = undefined;
    state.error = "";
    state.isFetching = true;
  });
  builder.addCase(getEmployee.rejected, (state, action) => {
    state.error = action.error.message ? action.error.message : "";
    state.isFetching = false;
  });
};

export default getEmployeeReducer;

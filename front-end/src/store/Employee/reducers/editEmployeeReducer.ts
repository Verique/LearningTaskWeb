import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { editEmployee } from "../Employee";
import { EmployeeState } from "../interfaces/EmployeeState";

const editEmployeeReducer = (
  builder: ActionReducerMapBuilder<EmployeeState>
) => {
  builder.addCase(editEmployee.fulfilled, (state, action) => {
    state.error = "";
  });
  builder.addCase(editEmployee.pending, (state) => {
    state.error = "";
  });
  builder.addCase(editEmployee.rejected, (state, action) => {
    state.error = action.error.message ? action.error.message : "";
  });
};

export default editEmployeeReducer;

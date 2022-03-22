import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { addNewEmployee } from "../Employee";
import { EmployeeState } from "../interfaces/EmployeeState";

const addNewEmployeeReducer = (
  builder: ActionReducerMapBuilder<EmployeeState>
) => {
  builder.addCase(addNewEmployee.rejected, (state, action) => {
    state.error = action.error.message ? action.error.message : "";
  });
};

export default addNewEmployeeReducer;

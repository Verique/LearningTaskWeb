import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { EmployeeState } from "../../types/EmployeeState";
import { deleteEmployee } from "../action-creators/Employee";

const deleteEmployeeReducer = (builder: ActionReducerMapBuilder<EmployeeState>) => {
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(employee => employee.id !== action.payload);
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : "";
    });
}

export default deleteEmployeeReducer;
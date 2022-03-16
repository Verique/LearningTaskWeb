import { combineReducers } from "redux";
import employeeReducer from "./EmployeeSlice";

export const rootReducer = combineReducers({
    employee: employeeReducer
})

export type RootState = ReturnType<typeof rootReducer>
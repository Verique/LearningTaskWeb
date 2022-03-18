import { combineReducers } from "redux";
import authReducer from "./AuthSlice";
import employeeReducer from "./EmployeeSlice";

export const rootReducer = combineReducers({
    employee: employeeReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>
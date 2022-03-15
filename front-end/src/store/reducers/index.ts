import { combineReducers } from "redux";
import { userReducer as employeeReducer } from "./employeeReducer";

export const rootReducer = combineReducers({
    employee: employeeReducer
})

export type RootState = ReturnType<typeof rootReducer>
import { combineReducers } from "redux";
import employeeReducer from "./employeeSlice";

export const rootReducer = combineReducers({
    employee: employeeReducer
})

export type RootState = ReturnType<typeof rootReducer>
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./Auth/AuthSlice";
import { employeeReducer } from "./Employee/EmployeeSlice";

export const rootReducer = combineReducers({
  employee: employeeReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

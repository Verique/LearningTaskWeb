import { createSlice } from "@reduxjs/toolkit";
import { ColumnNames } from "../../interfaces/ColumnsNames";
import { EmployeeState } from "./interfaces/EmployeeState";
import addNewEmployeeReducer from "./reducers/addNewEmployeeReducer";
import deleteEmployeeReducer from "./reducers/deleteEmployeeReducer";
import editEmployeeReducer from "./reducers/editEmployeeReducer";
import fetchEmployeesReducer from "./reducers/fetchEmployeesReducer";
import getEmployeeReducer from "./reducers/getEmployeeReducer";

const initialState: EmployeeState = {
  employees: [],
  isFetching: false,
  error: "",
  totalPages: 0,
  viewParams: {
    page: 0,
    orderby: ColumnNames.id,
    descending: false,
  },
};

const employeeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.viewParams.page = action.payload;
    },
    setOrderBy: (state, action) => {
      if (state.viewParams.orderby === action.payload) {
        state.viewParams.descending = !state.viewParams.descending;
      } else {
        state.viewParams.orderby = action.payload;
        state.viewParams.descending = false;
      }
    },
  },
  extraReducers: (builder) => {
    fetchEmployeesReducer(builder);
    deleteEmployeeReducer(builder);
    addNewEmployeeReducer(builder);
    getEmployeeReducer(builder);
    editEmployeeReducer(builder);
  },
});

export const employeeReducer = employeeSlice.reducer;
export const { changePage, setOrderBy } = employeeSlice.actions;

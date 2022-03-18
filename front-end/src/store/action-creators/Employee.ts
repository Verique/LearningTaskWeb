import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TableViewParams } from "../../types/TableViewParams";
import getUrl from "../../urlHelper";

export const fetchEmployees = createAsyncThunk(
    "employees/status",
    async (viewParams: TableViewParams) => {
        const url = getUrl(`/employee/page/${viewParams.page}`)
        const response = await axios.get(url, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") ?? "" },
            params: { descending: viewParams.descending, orderby: viewParams.orderby }
        });
        return response.data;
    }
)

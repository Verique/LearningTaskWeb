import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getUrl from "../../urlHelper";

export const fetchEmployees = createAsyncThunk(
    "employees/status",
    async () => {
        const url = getUrl("/employee/all")
        const response = await axios.get(url, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") ?? "" }
        });
        return response.data;
    }
)

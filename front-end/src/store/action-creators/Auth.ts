import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthCredentials } from "../../types/AuthCredentials";
import getUrl from "../../urlHelper";

export const auth = createAsyncThunk("auth/jwt",
    async (body: AuthCredentials) => {
        const url = getUrl("/login");
        const response = await axios.put(url, body);
        return response.data;
    }
)


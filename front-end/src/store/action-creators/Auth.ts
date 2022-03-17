import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import getUrl from "../../urlHelper";

export const auth = createAsyncThunk("auth/jwt",
    async (body: any) => {
        const url = getUrl("/login");
        const response = await axios.put(url, body);
        return response.data;
    }
)


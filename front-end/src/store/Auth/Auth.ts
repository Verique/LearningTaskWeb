import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthCredentials } from "./interfaces/AuthCredentials";
import getUrl from "../../helpers/urlHelper";

export const auth = createAsyncThunk(
  "auth/jwt",
  async (body: AuthCredentials) => {
    const url = getUrl("/login");
    const response = await axios.put(url, body);
    return response.data;
  }
);

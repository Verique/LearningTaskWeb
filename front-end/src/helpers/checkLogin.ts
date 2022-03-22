import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { loginFromLocal } from "../store/Auth/AuthSlice";

export const checkLogin = (
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) => {
  const token: string = localStorage.getItem("token") ?? "";
  dispatch(loginFromLocal(token !== ""));
};

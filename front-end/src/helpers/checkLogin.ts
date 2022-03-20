import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { login } from "../store/slices/AuthSlice";

export const checkLogin = (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const token: string = localStorage.getItem("token") ?? "";
    if (token !== "") {
        dispatch(login());
    }
}
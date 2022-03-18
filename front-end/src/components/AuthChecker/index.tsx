import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/ReduxHooks";
import { login } from "../../store/reducers/AuthSlice";

export const AuthChecker = () => {
    const { jwt } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const getToken = () => {
        const token: string = localStorage.getItem("token") ?? "";
        if (token !== "") {
            dispatch(login(token));
        }
    }

    useEffect(getToken, [dispatch])
    useEffect(() => localStorage.setItem("token", jwt), [jwt])
    // its bad to store jwt in localStorage, but its okay for studying purposes
    // its better to keep the refreshToken there and get a new one every session
    return <></>;
}
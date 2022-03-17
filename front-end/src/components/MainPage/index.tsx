import { useAppDispatch } from "../../hooks/ReduxHooks";
import { logout } from "../../store/reducers/AuthSlice";

export const MainPage = () => {
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <button onClick={logoutHandler}>Logout</button>
    );
}
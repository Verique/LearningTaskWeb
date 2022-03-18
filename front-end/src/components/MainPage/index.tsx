import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { fetchEmployees } from "../../store/action-creators/Employee";
import { logout } from "../../store/reducers/AuthSlice";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const { employees } = useAppSelector(state => state.employee);

    const logoutHandler = () => {
        dispatch(logout());
    }

    useEffect(() => { dispatch(fetchEmployees()) }, [dispatch])

    return (
        <div className="MainPage">
            <button onClick={logoutHandler}>Logout</button>
            {employees.map((employee) => {
                return <div key={employee.id}> {new Date(employee.birthday + "Z").toLocaleString()} </div>
            }
            )}
        </div>
    );
}
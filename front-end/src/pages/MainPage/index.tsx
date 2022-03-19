import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { fetchEmployees } from "../../store/action-creators/Employee";
import { logout } from "../../store/slices/AuthSlice";
import { nextPage, prevPage } from "../../store/slices/EmployeeSlice";
import { EmployeeEntry } from "./components/EmployeeEntry";
import { EmployeeHeaders } from "./components/EmployeeHeaders";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const { employees, viewParams, totalPages } = useAppSelector(state => state.employee);

    const logoutHandler = () => { dispatch(logout()) }
    const nextPageHandler = () => { dispatch(nextPage()) }
    const prevPageHandler = () => { dispatch(prevPage()) }

    useEffect(() => { dispatch(fetchEmployees(viewParams)) }, [dispatch, viewParams])

    return (
        <div className="MainPage">
            <button onClick={logoutHandler}>Logout</button>
            <table><tbody className="EmployeeTable">
                <EmployeeHeaders viewParams={viewParams} />
                {employees.map((employee) =>
                    <EmployeeEntry employee={employee} key={employee.id} />)}
            </tbody></table>
            <div>
                {(viewParams.page > 0) ? <button onClick={prevPageHandler}>{"<"}</button> : ""}
                {viewParams.page}
                {(viewParams.page < totalPages - 1) ? <button onClick={nextPageHandler}>{">"}</button> : ""}
            </div>
        </div >
    );
}
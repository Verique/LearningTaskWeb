import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchEmployees } from "../../store/Employee/Employee";
import { changePage } from "../../store/Employee/EmployeeSlice";
import { EmployeeEntry } from "../../components/EmployeeEntry";
import { EmployeeHeaders } from "../../components/EmployeeHeaders";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { logout } from "../../store/Auth/AuthSlice";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { employees, viewParams, totalPages } = useAppSelector(
    (state) => state.employee
  );
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.setItem("token", "");
  };

  const changePageHandler = (newPage: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(changePage(newPage));
  };

  const createNewHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate("new");
  };

  useEffect(() => {
    dispatch(fetchEmployees(viewParams));
  }, [dispatch, viewParams]);

  return (
    <div className="MainPage">
      <button onClick={logoutHandler} className="LogoutButton">
        Logout
      </button>
      <div>
        <button onClick={createNewHandler}>Add New</button>
        <table>
          <tbody className="EmployeeTable">
            <EmployeeHeaders viewParams={viewParams} />
            {employees.map((employee) => (
              <EmployeeEntry employee={employee} key={employee.id} />
            ))}
          </tbody>
        </table>
        <div>
          {viewParams.page > 0 ? (
            <button onClick={changePageHandler(viewParams.page - 1)}>
              {"<"}
            </button>
          ) : (
            ""
          )}
          {viewParams.page}
          {viewParams.page < totalPages - 1 ? (
            <button onClick={changePageHandler(viewParams.page + 1)}>
              {">"}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

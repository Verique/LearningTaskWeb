import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { getEmployee } from "../../store/action-creators/Employee";
import { EmployeeForm } from "../EmployeeForm";

export const EditPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { currentEmployee } = useAppSelector(state => state.employee);
    const match = useMatch("/employee/:id");
    const id = Number(match?.params.id);

    useEffect(() => { if (isNaN(id)) navigate("/employee") }, [id, navigate]);
    useEffect(() => { dispatch(getEmployee(id)) }, [id, dispatch])

    if (currentEmployee)
        return <EmployeeForm type="edit" employee={currentEmployee} eid={id} />
    else
        return <></>
}
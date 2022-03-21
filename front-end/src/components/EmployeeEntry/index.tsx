import { useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/ReduxHooks"
import { Employee } from "../../interfaces/Employee";
import { deleteEmployee } from "../../store/action-creators/Employee";
import "./styles.css"

export const EmployeeEntry = (props: { employee: Employee }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const deleteHandler = (id: number) => () => {
        dispatch(deleteEmployee(id));
    }

    const editHandler = (id: number) => () => {
        navigate(`/employee/${id}`);
    }

    return <tr className="EmployeeEntry">
        <td className="EmployeeItem small">{props.employee.id}</td>
        <td className="EmployeeItem">{props.employee.name}</td>
        <td className="EmployeeItem email">{props.employee.email}</td>
        <td className="EmployeeItem small">{props.employee.salary}</td>
        <td className="EmployeeItem small">{new Date(props.employee.birthday).toLocaleDateString()}</td>
        <td className="EmployeeItem">{new Date(props.employee.lastModifiedDate).toLocaleDateString()}</td>
        <td><button onClick={editHandler(props.employee.id)}>Изменить</button></td>
        <td><button onClick={deleteHandler(props.employee.id)}>Удалить</button></td>
    </tr>
}

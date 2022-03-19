import { useAppDispatch } from "../../../hooks/ReduxHooks"
import { deleteEmployee } from "../../../store/action-creators/Employee";
import { Employee } from "../../../types/Employee"
import "./index.css"

export const EmployeeEntry = (props: { employee: Employee }) => {
    const dispatch = useAppDispatch();

    const deleteHandler = (id: number) => () => {
        dispatch(deleteEmployee(id));
    }

    return <tr className="EmployeeEntry">
        <td className="EmployeeItem small">{props.employee.id}</td>
        <td className="EmployeeItem">{props.employee.name}</td>
        <td className="EmployeeItem email">{props.employee.email}</td>
        <td className="EmployeeItem small">{props.employee.salary}</td>
        <td className="EmployeeItem small">{new Date(props.employee.birthday).toLocaleDateString()}</td>
        <td className="EmployeeItem">{new Date(props.employee.lastModifiedDate).toLocaleString()}</td>
        <td><button>Изменить</button></td>
        <td><button onClick={deleteHandler(props.employee.id)}>Удалить</button></td>
    </tr>
}

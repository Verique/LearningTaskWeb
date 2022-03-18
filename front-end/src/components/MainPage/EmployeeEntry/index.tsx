import { useAppDispatch } from "../../../hooks/ReduxHooks"
import { setOrderBy } from "../../../store/slices/EmployeeSlice"
import { ColumnNames } from "../../../types/ColumnsNames"
import { Employee } from "../../../types/Employee"
import { TableViewParams } from "../../../types/TableViewParams"
import "./EmployeeEntry.css"

export const EmployeeEntry = (props: { employee: Employee }) => {
    return <tr>
        <td>{props.employee.id}</td>
        <td>{props.employee.name}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.salary}</td>
        <td>{new Date(props.employee.birthday).toLocaleDateString()}</td>
        <td>{new Date(props.employee.lastModifiedDate).toLocaleString()}</td>
    </tr>
}

export const EmployeeHeaders = (props: { viewParams: TableViewParams }) => {

    return <tr>
        {Columns.map((column) =>
            <THeader
                key={column.name}
                columnName={column.name}
                orderby={props.viewParams.orderby}
                name={column.viewText}
                descending={props.viewParams.descending}
            />
        )}
    </tr>
}

const THeader = (props: { columnName: ColumnNames, orderby: ColumnNames, name: string, descending: boolean }) => {
    const dispatch = useAppDispatch();
    const orderByHandler = (orderby: ColumnNames) => () => { dispatch(setOrderBy(orderby)); }
    return (
        <th className="THeader"
            onClick={orderByHandler(props.columnName)}
        >
            {props.name}
            {
                (props.columnName === props.orderby) ?
                    (props.descending ? "▼" : "▲") :
                    ""
            }
        </th>
    )
}

const Columns = [
    { name: ColumnNames.id, viewText: "Id" },
    { name: ColumnNames.name, viewText: "Name" },
    { name: ColumnNames.email, viewText: "Email" },
    { name: ColumnNames.salary, viewText: "Salary" },
    { name: ColumnNames.birthday, viewText: "Birthday" },
    { name: ColumnNames.lastModifiedDate, viewText: "Last Modified Date" }
]
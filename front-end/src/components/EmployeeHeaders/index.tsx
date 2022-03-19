import { ColumnNames } from "../../interfaces/ColumnsNames";
import { TableViewParams } from "../../interfaces/TableViewParams";
import { THeader } from "../THeader";


export const EmployeeHeaders = (props: { viewParams: TableViewParams; }) => {

    return <tr className="EmployeeHeaders">
        {Columns.map((column) => <THeader
            key={column.name}
            columnName={column.name}
            orderby={props.viewParams.orderby}
            name={column.viewText}
            descending={props.viewParams.descending} />)}
    </tr>
};

const Columns = [
    { name: ColumnNames.id, viewText: "Id" },
    { name: ColumnNames.name, viewText: "Name" },
    { name: ColumnNames.email, viewText: "Email" },
    { name: ColumnNames.salary, viewText: "Salary" },
    { name: ColumnNames.birthday, viewText: "Birthday" },
    { name: ColumnNames.lastModifiedDate, viewText: "Last Modified Date" }
];

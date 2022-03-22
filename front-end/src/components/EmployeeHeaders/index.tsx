import { useAppDispatch } from "../../store/hooks";
import { ColumnNames } from "../../interfaces/ColumnsNames";
import { TableViewParams } from "../../interfaces/TableViewParams";
import { setOrderBy } from "../../store/Employee/EmployeeSlice";
import "./styles.css";

export const EmployeeHeaders = (props: { viewParams: TableViewParams }) => {
  const dispatch = useAppDispatch();

  const orderByHandler = (orderby: ColumnNames) => () => {
    dispatch(setOrderBy(orderby));
  };

  return (
    <tr>
      {Columns.map((column) => (
        <th
          className="EmployeeHeader"
          key={column.name}
          onClick={orderByHandler(column.name)}
        >
          {column.viewText}
          {column.name === props.viewParams.orderby
            ? props.viewParams.descending
              ? "▼"
              : "▲"
            : ""}
        </th>
      ))}
    </tr>
  );
};

const Columns = [
  { name: ColumnNames.id, viewText: "Id" },
  { name: ColumnNames.name, viewText: "Name" },
  { name: ColumnNames.email, viewText: "Email" },
  { name: ColumnNames.salary, viewText: "Salary" },
  { name: ColumnNames.birthday, viewText: "Birthday" },
  { name: ColumnNames.lastModifiedDate, viewText: "Last Modified Date" },
];

import { useAppDispatch } from "../../../../hooks/ReduxHooks";
import { ColumnNames } from "../../../../interfaces/ColumnsNames";
import { setOrderBy } from "../../../../store/slices/EmployeeSlice";
import "./styles.css"

export const THeader = (props: { columnName: ColumnNames; orderby: ColumnNames; name: string; descending: boolean; }) => {
    const dispatch = useAppDispatch();
    const orderByHandler = (orderby: ColumnNames) => () => { dispatch(setOrderBy(orderby)); };
    return (
        <th className="THeader" onClick={orderByHandler(props.columnName)} >
            {props.name}
            {(props.columnName === props.orderby) ?
                (props.descending ? "▼" : "▲") :
                ""}
        </th>
    );
};

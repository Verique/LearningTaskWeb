import { useAppDispatch } from "../../../../hooks/ReduxHooks";
import { setOrderBy } from "../../../../store/slices/EmployeeSlice";
import { ColumnNames } from "../../../../types/ColumnsNames";
import "./index.css"

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

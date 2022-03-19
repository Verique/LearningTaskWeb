import { ColumnNames } from "./ColumnsNames";

export interface TableViewParams {
    page: number;
    orderby: ColumnNames;
    descending: boolean;
}
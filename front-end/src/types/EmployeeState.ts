import { Employee } from "./Employee";
import { TableViewParams } from "./TableViewParams";

export interface EmployeeState {
    employees: Employee[];
    isFetching: boolean;
    error: string;
    totalPages: number;
    viewParams: TableViewParams;
}
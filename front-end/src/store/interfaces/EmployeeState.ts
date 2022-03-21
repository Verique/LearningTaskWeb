import { Employee } from "../../interfaces/Employee";
import { TableViewParams } from "../../interfaces/TableViewParams";

export interface EmployeeState {
    employees: Employee[];
    currentEmployee?: Employee;
    isFetching: boolean;
    error: string;
    totalPages: number;
    viewParams: TableViewParams;
}
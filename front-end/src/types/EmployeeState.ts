import { Employee } from "./Employee";

export interface EmployeeState {
    employees: Employee[];
    isFetching: boolean;
    error: string;
}
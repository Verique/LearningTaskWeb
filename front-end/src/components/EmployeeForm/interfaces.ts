import { Employee } from "../../interfaces/Employee";

export type EmployeeFormType = "edit" | "add";

export interface EmployeeFormProps {
  employee?: Employee;
  eid?: number;
  type: EmployeeFormType;
}

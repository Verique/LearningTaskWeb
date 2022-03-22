export interface Employee extends EmployeeEditableData {
  id: number;
  lastModifiedDate: string;
}

export interface EmployeeEditableData {
  name: string;
  email: string;
  birthday: string;
  salary: number;
}

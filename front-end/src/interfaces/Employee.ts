export interface Employee {
    id: number;
    lastModifiedDate: string;
    name: string;
    email: string;
    birthday: string;
    salary: number;
}

export interface EmployeeEditableData {
    Name: string;
    Email: string;
    Birthday: string;
    Salary: number;
}
import React, { HTMLProps, SetStateAction } from "react";
import { Employee, EmployeeEditableData } from "../../interfaces/Employee";

export interface InputFieldProps<T> extends HTMLProps<HTMLInputElement> {
    label: string;
    states: FieldStates<T>
    checkField: (value: T) => boolean;
    getValue: (event: React.ChangeEvent<HTMLInputElement>) => T;
};

export interface EmployeeFormProps {
    employee?: Employee;
    eid?: number;
    type: "edit" | "add";
}

export interface SubmitButtonProps extends HTMLProps<HTMLButtonElement> {
    employee: EmployeeEditableData;
    eid?: number;
    type: "edit" | "add";
}

export interface FieldStates<T> {
    field: T;
    setField: React.Dispatch<SetStateAction<T>>;
    fieldOk: boolean;
    setFieldOk: React.Dispatch<SetStateAction<boolean>>;
}

import React, { HTMLProps, ReducerAction, SetStateAction } from "react";
import { EmployeeEditableData } from "../../interfaces/Employee";

export interface InputFieldProps<T> extends HTMLProps<HTMLInputElement> {
    label: string;
    states: FieldStates<T>
    checkField: (value: T) => boolean;
    getValue: (event: React.ChangeEvent<HTMLInputElement>) => T;
};

export interface EditPageProps {
    id?: number
}

export interface FieldStates<T> {
    field: T;
    setField: React.Dispatch<SetStateAction<T>>;
    fieldOk: boolean;
    setFieldOk: React.Dispatch<SetStateAction<boolean>>;
}

export interface SubmitButtonProps extends HTMLProps<HTMLButtonElement> {
    employee: EmployeeEditableData;
}
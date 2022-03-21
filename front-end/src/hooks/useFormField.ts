import { useState } from "react"
import { FieldStates } from "../pages/EmployeeForm/interfaces";

export function useFormField<T>(defaultValue: T): FieldStates<T> {
    const [field, setField] = useState(defaultValue);
    const [fieldOk, setFieldOk] = useState(false);
    return { field, fieldOk, setField, setFieldOk };
}  
import { useState } from "react"
import { FieldStates } from "../pages/EditPage/interfaces";

export function useFormField<T>(defaultValue: T, defaultState: boolean): FieldStates<T> {
    const [field, setField] = useState(defaultValue);
    const [fieldOk, setFieldOk] = useState(defaultState);
    return { field, fieldOk, setField, setFieldOk };
}  
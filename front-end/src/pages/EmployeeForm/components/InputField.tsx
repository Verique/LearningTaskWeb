import { useEffect } from "react";
import { InputFieldProps } from "../interfaces";

export function InputField<T>(props: InputFieldProps<T>) {

    const CheckFieldHandler = () => {
        props.states.setFieldOk(props.checkField(props.states.field));
    }

    useEffect(CheckFieldHandler, [props])

    const FieldChangeHandler: React.ChangeEventHandler = onFieldChange(
        props.states.setField,
        props.states.setFieldOk,
        props.checkField,
        props.getValue);

    return <div className="InputField">
        <label htmlFor={props.label}>{props.label}</label>
        <input className={"Input-" + props.states.fieldOk}
            type={props.type ?? "text"}
            name={props.label}
            value={props.value}
            onChange={FieldChangeHandler}
        >
        </input>
    </div>;
};

export function onFieldChange<T>(
    setField: React.Dispatch<React.SetStateAction<T>>,
    setFieldOk: React.Dispatch<React.SetStateAction<boolean>>,
    checkField: (field: T) => boolean,
    getValue: (event: React.ChangeEvent<HTMLInputElement>) => T)
    : React.ChangeEventHandler {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = getValue(event);
        setField(value);
        setFieldOk(checkField(value));
    }
}
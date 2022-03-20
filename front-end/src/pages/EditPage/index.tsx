import { InputFieldProps } from "./InputFieldProps"
import "./styles.css"

export const EditPage = () => {
    return <div>
        <InputField label="Name" />
        <InputField label="Email" />
        <InputField label="Salary" />
        <InputField label="Birthday" type="date" />
        <button> Add Employee </button>
    </div>
}

export const InputField = (props: InputFieldProps) => {
    return <div className="InputField">
        <label htmlFor={props.label}>{props.label}</label>
        <input type={props.type ?? "text"} lang="en-US" name={props.label}></input>
    </div>
}
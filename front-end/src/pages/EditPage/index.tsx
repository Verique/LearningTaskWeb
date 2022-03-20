import { ChangeEvent, useState } from "react"
import { InputFieldProps } from "./interfaces"
import "./styles.css"

export const EditPage = () => {
    const [name, setName] = useState("");
    const onNameChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }

    const [email, setEmail] = useState("");
    const onEmailChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) }

    const [salary, setSalary] = useState(0);
    const onSalaryChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => { setSalary(event.target.valueAsNumber) }

    const [date, setDate] = useState(new Date());
    const onDateChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            setDate(new Date(event.target.value))
        }

    return <div>
        <InputField
            label="Name"
            value={name}
            onChange={onNameChange}
        />
        <InputField
            label="Email"
            value={email}
            onChange={onEmailChange}
        />
        <InputField
            label="Salary"
            type="number"
            value={salary.toString()}
            onChange={onSalaryChange}
        />
        <InputField
            label="Birthday"
            type="date"
            value={date.toISOString().substring(0, 10)}
            onChange={onDateChange}
        />
        <button> Add Employee </button>
    </div>
}

export const InputField = (props: InputFieldProps) => {
    return <div className="InputField">
        <label htmlFor={props.label}>{props.label}</label>
        <input
            type={props.type ?? "text"}
            name={props.label}
            value={props.value}
            onChange={props.onChange}>
        </input>
    </div>
}
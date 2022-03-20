import { ChangeEvent, useState } from "react"
import { InputFieldProps } from "./interfaces"
import "./styles.css"

export const EditPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState(0);
    const [date, setDate] = useState(new Date());

    const [nameOk, setNameOk] = useState(false);
    const [emailOk, setEmailOk] = useState(false);
    const [salaryOk, setSalaryOk] = useState(true);
    const [dateOk, setDateOk] = useState(true);

    const onNameChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            const name = event.target.value;
            setName(name.trim())
            setNameOk(name.trim() !== "")
        }

    const onEmailChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            const email = event.target.value;
            setEmail(email)
            const regex = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/);
            setEmailOk(regex.test(email));
        }

    const onSalaryChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            const salary = event.target.valueAsNumber;
            setSalary(salary)
            setSalaryOk(salary >= 0);
        }

    const onDateChange: React.ChangeEventHandler =
        (event: ChangeEvent<HTMLInputElement>) => {
            const date = event.target.value;
            setDate(new Date(date))
            setDateOk(true);
        }
    const formOk = dateOk && nameOk && emailOk && salaryOk;

    return <div>
        <InputField
            label="Name"
            value={name}
            onChange={onNameChange}
            isOk={nameOk}
        />
        <InputField
            label="Email"
            value={email}
            onChange={onEmailChange}
            isOk={emailOk}
        />
        <InputField
            label="Salary"
            type="number"
            value={salary.toString()}
            onChange={onSalaryChange}
            isOk={salaryOk}
        />
        <InputField
            label="Birthday"
            type="date"
            value={date.toISOString().substring(0, 10)}
            onChange={onDateChange}
            isOk={dateOk}
        />
        <button
            className="FormButton"
            disabled={!formOk}>
            Add Employee
        </button>
    </div>
}

export const InputField = (props: InputFieldProps) => {
    return <div className="InputField" >
        <label htmlFor={props.label}>{props.label}</label>
        <input className={"Input" + props.isOk}
            type={props.type ?? "text"}
            name={props.label}
            value={props.value}
            onChange={props.onChange}>
        </input>
    </div>
}
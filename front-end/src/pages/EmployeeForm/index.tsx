import { EmployeeEditableData } from "../../interfaces/Employee";
import { BirthdayField } from "./components/BirthdayField";
import { CancelButton } from "./components/CancelButton";
import { EmailField } from "./components/EmailField";
import { NameField } from "./components/NameField";
import { SalaryField } from "./components/SalaryField";
import "./styles.css";
import { useFormField } from "../../hooks/useFormField";
import { EmployeeFormProps } from "./interfaces";
import { SubmitButton } from "./components/SubmitButton";

export const EmployeeForm = (props: EmployeeFormProps) => {
    let defaultName = "";
    let defaultEmail = "";
    let defaultDate = (new Date()).toISOString().substring(0, 10);
    let defaultSalary = 0;

    if (props.employee) {
        defaultName = props.employee.name;
        defaultEmail = props.employee.email;
        defaultDate = (new Date(props.employee.birthday)).toISOString().substring(0, 10);
        defaultSalary = props.employee.salary;
    }

    const nameStates = useFormField(defaultName);
    const emailStates = useFormField(defaultEmail);
    const dateStates = useFormField(defaultDate);
    const salaryStates = useFormField(defaultSalary);

    const currentEmployee: EmployeeEditableData = {
        name: nameStates.field,
        salary: salaryStates.field,
        birthday: dateStates.field,
        email: emailStates.field,
    }

    const formOk = dateStates.fieldOk &&
        nameStates.fieldOk &&
        emailStates.fieldOk &&
        salaryStates.fieldOk;

    return <div>
        <NameField states={nameStates} />
        <EmailField states={emailStates} />
        <SalaryField states={salaryStates} />
        <BirthdayField states={dateStates} />

        <div className="Buttons">
            <SubmitButton
                type={props.type}
                eid={props.eid}
                disabled={!formOk}
                employee={currentEmployee}
                value={(props.type === "edit") ? "Edit Employee" : "Add Employee"} />
            <CancelButton />
        </div>
    </div>
}


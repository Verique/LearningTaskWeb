import { EmployeeEditableData } from "../../interfaces/Employee";
import { BirthdayField } from "./components/BirthdayField";
import { CancelButton } from "./components/CancelButton";
import { EmailField } from "./components/EmailField";
import { NameField } from "./components/NameField";
import { SalaryField } from "./components/SalaryField";
import { SubmitButton } from "./components/SubmitButton";
import { EditPageProps } from "./interfaces";
import "./styles.css";
import { useFormField } from "../../hooks/useFormField";

export const EditPage = (props: EditPageProps) => {

    const nameStates = useFormField("", false);
    const emailStates = useFormField("", false);
    const dateStates = useFormField((new Date()).toISOString().substring(0, 10), true);
    const salaryStates = useFormField(0, true);

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
                disabled={!formOk}
                employee={currentEmployee}
                value="Add Employee" />
            <CancelButton />
        </div>
    </div>
}


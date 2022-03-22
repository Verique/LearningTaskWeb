import "./styles.css";
import { EmployeeFormProps } from "./interfaces";
import { InputField } from "../InputField";
import { useEmployeeForm } from "./hooks/useEmployeeForm";

export const EmployeeForm = (props: EmployeeFormProps) => {
  const form = useEmployeeForm(props.type, props.employee);

  return (
    <div>
      <InputField label="Name" fieldInfo={form.name} />
      <InputField label="Email" fieldInfo={form.email} />
      <InputField label="Salary" fieldInfo={form.salary} type="number" />
      <InputField label="Birthday" fieldInfo={form.birthday} type="date" />

      <div className="Buttons">
        <button disabled={!form.isFormValid} onClick={form.onSubmitButtonClick}>
          {props.type === "edit" ? "Edit Employee" : "Add Employee"}
        </button>
        <button onClick={form.onCancelButtonClick}>Cancel</button>
      </div>
    </div>
  );
};

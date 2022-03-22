import { useNavigate } from "react-router";
import { EmployeeFormType } from "../interfaces";
import { Employee, EmployeeEditableData } from "../../../interfaces/Employee";
import { editEmployee, addNewEmployee } from "../../../store/Employee/Employee";
import { useAppDispatch } from "../../../store/hooks";
import { useFormField } from "./useFormField";

export const useEmployeeForm = (
  type: EmployeeFormType,
  employee?: Employee
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultName = employee ? employee.name : "";
  const defaultEmail = employee ? employee.email : "";
  const defaultBirthday = new Date(employee ? employee.birthday : Date.now())
    .toISOString()
    .substring(0, 10);
  const defaultSalary = employee ? employee.salary : 0;

  const nameField = useFormField(defaultName);
  const emailField = useFormField(defaultEmail);
  const birthdayField = useFormField(defaultBirthday);
  const salaryField = useFormField(defaultSalary);

  const currentEmployee: EmployeeEditableData = {
    name: nameField.value,
    salary: salaryField.value,
    birthday: birthdayField.value,
    email: emailField.value,
  };

  const isFormValid =
    birthdayField.isFieldValid &&
    nameField.isFieldValid &&
    emailField.isFieldValid &&
    salaryField.isFieldValid;

  const onEditButtonClick: React.MouseEventHandler = () => {
    dispatch(
      editEmployee({ employee: currentEmployee, id: employee?.id })
    ).then(() => navigate("/employee"));
  };

  const onAddButtonClick: React.MouseEventHandler = () => {
    dispatch(addNewEmployee(currentEmployee)).then(() => navigate("/employee"));
  };

  const onCancelButtonClick = () => navigate("/employee");

  const onSubmitButtonClick =
    type === "edit" ? onEditButtonClick : onAddButtonClick;

  const getStringValueFromInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => event.target.value;
  const getNumberValueFromInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => event.target.valueAsNumber;

  const nameCheck = (value: string) => value.trim() !== "";
  const emailCheck = (value: string) =>
    new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/).test(value);
  const salaryCheck = (value: number) => value >= 0;
  const birthdayCheck = (value: string) => new Date(value) <= new Date();

  return {
    isFormValid,
    currentEmployee,
    name: {
      field: nameField,
      checkValue: nameCheck,
      getValue: getStringValueFromInput,
    },
    email: {
      field: emailField,
      checkValue: emailCheck,
      getValue: getStringValueFromInput,
    },
    birthday: {
      field: birthdayField,
      checkValue: birthdayCheck,
      getValue: getStringValueFromInput,
    },
    salary: {
      field: salaryField,
      checkValue: salaryCheck,
      getValue: getNumberValueFromInput,
    },
    onSubmitButtonClick,
    onCancelButtonClick,
  };
};

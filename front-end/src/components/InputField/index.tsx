import { useEffect } from "react";
import { InputFieldProps } from "./interfaces";

export function InputField<T extends number | string>(
  props: InputFieldProps<T>
) {
  const checkField = () => {
    props.fieldInfo.field.setFieldValid(
      props.fieldInfo.checkValue(props.fieldInfo.field.value)
    );
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.fieldInfo.field.setValue(props.fieldInfo.getValue(event));
  };

  useEffect(checkField, [props]);

  return (
    <div className="InputField">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className={"Input-" + props.fieldInfo.field.isFieldValid}
        type={props.type ?? "text"}
        name={props.label}
        value={props.fieldInfo.field.value}
        onChange={onChange}
      ></input>
    </div>
  );
}

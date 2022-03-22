import { useState } from "react";
import { FieldStates } from "../../InputField/interfaces";

export function useFormField<T>(defaultValue: T): FieldStates<T> {
  const [value, setValue] = useState(defaultValue);
  const [isFieldValid, setFieldValid] = useState(false);
  return { value, isFieldValid, setValue, setFieldValid };
}

import { SetStateAction, HTMLProps } from "react";

export interface FieldStates<T> {
  value: T;
  setValue: React.Dispatch<SetStateAction<T>>;
  isFieldValid: boolean;
  setFieldValid: React.Dispatch<SetStateAction<boolean>>;
}

export interface FieldInfo<T> {
  field: FieldStates<T>;
  checkValue: (value: T) => boolean;
  getValue: (event: React.ChangeEvent<HTMLInputElement>) => T;
}

export interface InputFieldProps<T> extends HTMLProps<HTMLInputElement> {
  label: string;
  fieldInfo: FieldInfo<T>;
}

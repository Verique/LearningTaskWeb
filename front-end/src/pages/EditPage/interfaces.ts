import { ChangeEventHandler, EventHandler, HTMLProps } from "react";

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    isOk?: boolean;
};

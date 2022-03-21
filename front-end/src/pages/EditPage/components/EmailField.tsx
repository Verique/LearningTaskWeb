import { FieldStates } from "../interfaces";
import { InputField } from "./InputField";

export const EmailField = (props: { states: FieldStates<string> }) => {
    return <InputField
        label="Email"
        checkField={(value) => new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/).test(value)}
        getValue={e => e.target.value}
        value={props.states.field}
        states={props.states}
    />
}
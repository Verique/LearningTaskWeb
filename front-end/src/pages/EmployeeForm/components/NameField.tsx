import { FieldStates } from "../interfaces";
import { InputField } from "./InputField";

export const NameField = (props: { states: FieldStates<string> }) => {
    return <InputField
        label="Name"
        value={props.states.field}
        states={props.states}
        checkField={(value) => value.trim() !== ""}
        getValue={e => e.target.value}
    />
}
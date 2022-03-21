import { FieldStates } from "../interfaces";
import { InputField } from "./InputField";

export const BirthdayField = (props: { states: FieldStates<string> }) => {
    return <InputField
        label="Birthday"
        type="date"
        checkField={() => true}
        getValue={e => e.target.value}
        value={props.states.field}
        states={props.states}
    />
}
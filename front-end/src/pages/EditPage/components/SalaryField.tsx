import { FieldStates } from "../interfaces";
import { InputField } from "./InputField";

export const SalaryField = (props: { states: FieldStates<number> }) => {
    return <InputField
        label="Salary"
        type="number"
        checkField={(value) => (value >= 0)}
        getValue={e => e.target.valueAsNumber}
        value={props.states.field}
        states={props.states}
    />
}
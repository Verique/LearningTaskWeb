import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { addNewEmployee, editEmployee } from "../../../store/action-creators/Employee";
import { SubmitButtonProps } from "../interfaces";

export const SubmitButton = (props: SubmitButtonProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onEditButtonClick: React.MouseEventHandler =
        () => {
            dispatch(editEmployee({ employee: props.employee, id: props.eid }))
                .then(() => navigate("/employee"));
        }

    const onAddButtonClick: React.MouseEventHandler =
        () => {
            dispatch(addNewEmployee(props.employee))
                .then(() => navigate("/employee"));
        }

    return (
        <button
            disabled={props.disabled}
            onClick={(props.type === "edit") ? onEditButtonClick : onAddButtonClick} >
            {props.value}
        </button >
    )
}
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { addNewEmployee } from "../../../store/action-creators/Employee";
import { SubmitButtonProps } from "../interfaces";

export const SubmitButton = (props: SubmitButtonProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onAddButtonClick: React.MouseEventHandler =
        () => {
            dispatch(addNewEmployee(props.employee));
            navigate("/employee");
        }

    return (
        <button disabled={props.disabled} onClick={onAddButtonClick} >
            Add Employee
        </button>
    )
}
import { useNavigate } from "react-router-dom";

export const CancelButton = () => {
    const navigate = useNavigate();
    const onCancelButtonClick = () => navigate("/employee");

    return (
        <button onClick={onCancelButtonClick} value="Cancel">
            Cancel
        </button>
    );
}
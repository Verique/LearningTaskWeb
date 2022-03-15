import axios from "axios";
import { Dispatch } from "redux";
import { EmployeeAction, EmployeeActionTypes } from "../../types/employee";

export const fetchEmployees = () =>
    async (dispatch: Dispatch<EmployeeAction>) => {
        try {
            dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({ type: EmployeeActionTypes.FETCH_EMPLOYEES_OK, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: EmployeeActionTypes.FETCH_EMPLOYEES,
                payload: 'Employee fetch error'
            })
        }
    }

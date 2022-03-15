import { EmployeeAction, EmployeeActionTypes, EmployeeState } from "../../types/employee";

const defaultState: EmployeeState = {
    employees: [],
    isFetching: false,
    error: null
}

export const userReducer = (state = defaultState, action : EmployeeAction) : EmployeeState => {
    switch (action.type) {
        case EmployeeActionTypes.FETCH_EMPLOYEES:
            return {employees: [], isFetching: true, error: null}
        case EmployeeActionTypes.FETCH_EMPLOYEES_FAIL:
            return {employees: [], isFetching: false, error: action.payload}
        case EmployeeActionTypes.FETCH_EMPLOYEES_OK:
            return {employees: action.payload, isFetching: false, error: null}
        default:
            return state;
    }
}
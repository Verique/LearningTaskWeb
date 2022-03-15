export interface EmployeeState {
    employees: any[];
    isFetching: boolean;
    error: null | string;
}

export enum EmployeeActionTypes{
    FETCH_EMPLOYEES = "FETCH_EMPLOYEES",
    FETCH_EMPLOYEES_OK = "FETCH_EMPLOYEES_OK",
    FETCH_EMPLOYEES_FAIL = "FETCH_EMPLOYEES_FAIL",
}

interface FetchAction {
    type: EmployeeActionTypes.FETCH_EMPLOYEES;
}

interface FetchActionOk {
    type: EmployeeActionTypes.FETCH_EMPLOYEES_OK;
    payload: any[];
}

interface FetchActionFail {
    type: EmployeeActionTypes.FETCH_EMPLOYEES_FAIL;
    payload: string;
}

export type EmployeeAction = FetchAction | FetchActionFail | FetchActionOk
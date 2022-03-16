import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchEmployees } from './store/action-creators/employee';

function App() {
  const { employees, isFetching, error } = useAppSelector(state => state.employee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  return (
    <div className="App">
      {employees.map(e => <h1>{e.name}</h1>)}
    </div>
  );
}

export default App;

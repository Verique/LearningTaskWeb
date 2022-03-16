import React, { useEffect } from 'react';
import './App.css';
import { LoginPage } from './components/LoginPage';
import { useAppDispatch, useAppSelector } from './hooks/ReduxHooks';
import { fetchEmployees } from './store/action-creators/Employee';

function App() {
  const { employees, isFetching, error } = useAppSelector(state => state.employee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <div className="App">
      <LoginPage />
    </div >
  );
}

export default App;

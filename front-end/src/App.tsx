import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const { employees, isFetching, error } = useTypedSelector(state => state.employee);
  const { fetchEmployees } = useActions(); 

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div className="App">
      {employees.map(e => <h1>{e.name}</h1>)}
    </div>
  );
}

export default App;

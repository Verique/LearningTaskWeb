import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { useAppDispatch } from './hooks/ReduxHooks';
import { fetchEmployees } from './store/action-creators/Employee';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div >
    </BrowserRouter>
  );
}

export default App;

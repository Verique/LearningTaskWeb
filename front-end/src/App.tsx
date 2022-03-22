import { useEffect } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { checkLogin } from './helpers/checkLogin';
import { useAppDispatch, useAppSelector } from './hooks/ReduxHooks';

function App() {
  const dispatch = useAppDispatch();
  const { isReadingLocal } = useAppSelector(state => state.auth);
  useEffect(() => checkLogin(dispatch), [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        {isReadingLocal ? <></> : <AppRouter />}
      </div >
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { checkLogin } from './helpers/checkLogin';
import { useAppDispatch } from './hooks/ReduxHooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => checkLogin(dispatch), [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div >
    </BrowserRouter>
  );
}

export default App;

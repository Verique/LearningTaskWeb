import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { AuthChecker } from './components/AuthChecker';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
        <AuthChecker />
      </div >
    </BrowserRouter>
  );
}

export default App;

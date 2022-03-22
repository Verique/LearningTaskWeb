import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { checkLogin } from "./helpers/checkLogin";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { AppRouter } from "./router";

function App() {
  const dispatch = useAppDispatch();
  const { isReadingLocal } = useAppSelector((state) => state.auth);
  useEffect(() => checkLogin(dispatch), [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">{isReadingLocal ? <></> : <AppRouter />}</div>
    </BrowserRouter>
  );
}

export default App;

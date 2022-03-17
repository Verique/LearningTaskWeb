import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { auth } from "../../store/action-creators/Auth";
import "./LoginPage.css"

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const { isLogged } = useAppSelector(state => state.auth);

    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const loginButtonPressHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(auth({ username, password }));
    }

    return (
        <div className="loginPage">
            <h2 className="loginTitle">Log in</h2>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={textChangeHandler} value={username} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={passwordChangeHandler} value={password} />
            <button className="loginButton" onClick={loginButtonPressHandler}>Log in</button>
            {isLogged ? <h5>Logged in!</h5> : ""}
        </div >
    );
};
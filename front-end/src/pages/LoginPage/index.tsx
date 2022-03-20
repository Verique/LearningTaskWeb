import { useState } from "react";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { auth } from "../../store/action-creators/Auth";
import "./styles.css"

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();

    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const loginButtonPressHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(auth({ username, password }))
            .then((action) => localStorage.setItem("token", action.payload));
    }

    return (
        <div className="loginPage">
            <h2 className="loginTitle">Log in</h2>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={textChangeHandler} value={username} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={passwordChangeHandler} value={password} />
            <button className="loginButton" onClick={loginButtonPressHandler}>Log in</button>
        </div >
    );
};
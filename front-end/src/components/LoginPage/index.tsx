import { useState } from "react";
import "./LoginPage.css"

export const LoginPage = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    return (
        <div className="loginPage">
            <h2 className="loginTitle">Log in</h2>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={textChangeHandler} value={text} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={passwordChangeHandler} value={password} />
            <button className="loginButton">Log in</button>
        </div >
    );
};
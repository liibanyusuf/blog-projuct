import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        setError("");

        const username = userRef.current.value;
        const password = passwordRef.current.value;

        if (!username || !password) {
            setError("Please fill in both fields.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username,
                password,
            });
            console.log(res.data, 'data');
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            {error && <span className="errorMessage">{error}</span>}
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your username..."
                    ref={userRef}
                    aria-label="Username"
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                    aria-label="Password"
                />
                <button className="loginButton" type="submit" disabled={isFetching}>
                    {isFetching ? "Loading..." : "Login"}
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}

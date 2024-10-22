import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                password,
            });
            if (res.data) {
                navigate("/login"); // Redirect using navigate
            }
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    className="registerInput" 
                    type="password"
                    placeholder="Enter your password..."
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
                {error && <span className="errorMessage">d. Please try again.</span>} {/* Error message */}
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    );
}

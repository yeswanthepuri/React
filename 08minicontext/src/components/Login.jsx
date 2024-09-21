import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
            <label>Password</label>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
            <button onClick={handleSubmit}>login</button>

        </div>
    )
}

export default Login
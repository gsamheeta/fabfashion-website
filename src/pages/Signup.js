import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                email,
                first_name: firstName,
                last_name: lastName,
            }),
        });

        if (!response.ok) {
            throw new Error('Signup failed');
        }

        navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
        alert('Signup failed');
        console.error('Signup error:', error);
    }
};



    return (
        <div className="signup-container">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;

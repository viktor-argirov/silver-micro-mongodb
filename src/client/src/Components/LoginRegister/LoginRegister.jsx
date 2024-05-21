import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { toast } from 'react-toastify';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerLink = (e) => {
        e.preventDefault();
        setAction('active');
    };

    const loginLink = (e) => {
        e.preventDefault();
        setAction('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const loginObj = { email, password };

        fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginObj),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                toast.success('Login successful!');
                navigate('/reservations');
            } else {
                toast.error('Login failed: ' + data.message);
            }
        })
        .catch((err) => {
            toast.error('Failed: ' + err.message);
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const regObj = { username, email, password };
        console.log("register : ",regObj);

        fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(regObj),
        })
        .then((response) => {console.log(response); return response.json();})
        .then((data) => {
            if (data.success) {
                toast.success('Registration successful!');
                setUsername('');
                setEmail('');
                setPassword('');
                setAction('');
            } else {
                toast.error('Registration failed: ' + data.message);
            }
        })
        .catch((err) => {
            toast.error('Failed: ' + err.message);
        });
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className='form-box login'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                    </div>
                    <div className='input-box'>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox' />
                            Remember me
                        </label>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>
                            Don't have an account?
                            <a href='#' onClick={registerLink}>
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div className='form-box register'>
                <form onSubmit={handleRegister}>
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' required />
                    </div>
                    <div className='input-box'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required />
                    </div>
                    <div className='input-box'>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required />
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox' />
                            I agree to the terms and conditions
                        </label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className='register-link'>
                        <p>
                            Already have an account?
                            <a href='#' onClick={loginLink}>
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;

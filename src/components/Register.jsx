import React from 'react';
import "../css/register.css"
const Register = () => {
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form action="register.php" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
            <div className="form-footer">
                <p>Do you already have an account? <a href="Login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
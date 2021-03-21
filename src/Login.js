import React, { useState } from 'react';
import './Login.css';
import image1 from "./image/image1.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch((e) => alert(e.message));
    };

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                history.push("/");
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login-logo"  
                    src={image1}/>
            </Link>

            <div className="login-container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className="login-signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to GETINTOBOOK Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Internet-Based Ads Notice</p>

                <button onClick={register}className='login-registerButton'>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login

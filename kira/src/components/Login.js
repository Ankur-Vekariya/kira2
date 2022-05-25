import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handle = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }


        // stored data from the register-form
        // var storedEmail = localStorage.getItem('email');
        // var storedPwd = localStorage.getItem('pwd');
    
        // // entered data from the login-form
        // var userEmail = document.getElementById('email');
        // var userPassword = document.getElementById('password');
    
        // // check if stored data from register-form is equal to data from login form
        // if(userEmail.value == storedEmail || userPassword.value !== storedPwd) {
        //     alert('loged in');
        // }else {
        //     alert('alert');
        // }

  return (
    <div>
        <h1>Login</h1>
        <form>
                <div class="form-group">
                    <label >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               
                <button type="submit" class="btn btn-primary" onClick={handle}>Submit</button>
                {/* <Link to='/RegistrationU'>Registration</Link> */}
            </form>
            {/* <div>
                <button><Link to='/RegistrationU'>Registration</Link></button>
            </div> */}
    </div>
  )
}

export default Login
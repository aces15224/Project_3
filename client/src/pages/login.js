import React, { useRef } from 'react';
import axios from 'axios';

const LoginForm = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const handleFormSubmit = e => {
        e.preventDefault();
        var userData = {
            username: emailRef.current.value,
            password: passwordRef.current.value,
        }

        console.log("THIS IS THE STATE", userData)

          axios.get('/api/login', {
            params: userData
          })
          .then(function (response) {
            console.log(response);
            window.location.replace("/home")
            //redirect
          })
          .catch(function (error) {
            console.log(error);
            //if you hit this spot throw an alert error
          })
         
    };

    return (
        <div className="card">
            <h5 id="loginText" className="card-header">Welcome to the Motivate Me App!  Please Login!</h5>
            <div className="card-body">
                <div id="loginDisplay" className="jumbotron jumbotron-fluid">
                </div>
                <form className="form-group" onSubmit={handleFormSubmit} >
                    <div className="form-group">
                        <label className="taskAdd"><h3>Login</h3></label>
                        <br></br>
                        <input className="col-12 form-control" ref={emailRef} type="text"
                            name="email"
                            placeholder="Email"
                        />
                        <input className="col-12 form-control" ref={passwordRef} type="text"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="submitBtn btn btn-primary">
                        Submit
                    </button>
                    <a href="/register" className="btn btn-success">Register</a>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
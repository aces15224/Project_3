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
            window.location.replace("/calendar")
            //redirect
          })
          .catch(function (error) {
            console.log(error);
            //if you hit this spot throw an alert error
          })
         
    };

    return (
        <div class="card">
            <h5 id="loginText" class="card-header">Welcome to the Motivate Me App!  Please Login!</h5>
            <div class="card-body">
                <div id="loginDisplay" class="jumbotron jumbotron-fluid">
                </div>
                <form className="form-group" onSubmit={handleFormSubmit} >
                    <div className="form-group">
                        <label className="taskAdd"><h3>User Info</h3></label>
                        <br></br>
                        <input className="col-12 form-control" ref={emailRef} type="text"
                            name="email"
                            placeholder="input email"
                        />
                        <input className="col-12 form-control" ref={passwordRef} type="text"
                            name="password"
                            placeholder="input password"
                        />
                    </div>
                    <button type="submit" className="submitBtn btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        // <div class="jumbotron jumbotron-fluid">
        //     <div class="container">
        //         <h1 class="display-4">User Login!</h1>
        //         <p class="lead">Welcome to the Motivate Me App!  Please Login!</p>
        //     </div>
        // </div>
        // <form className="form-group" onSubmit={handleFormSubmit} >
        //     <div className="form-group">
        //         <label className="taskAdd"><h3>User Info</h3></label>
        //         <br></br>
        //         <input className="col-12 form-control" ref={emailRef} type="text"
        //             name="email"
        //             placeholder="input email"
        //         />
        //         <input className="col-12 form-control" ref={passwordRef} type="text"
        //             name="password"
        //             placeholder="input password"
        //         />
        //     </div>
        //     <button type="submit" className="submitBtn btn btn-primary">
        //         Submit
        //     </button>
        // </form>
    )
}

export default LoginForm;
import React, { useRef } from 'react';
import axios from 'axios';

const RegisterPage = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstname = useRef();
    const lastname = useRef();
    
    const handleFormSubmit = e => {
        e.preventDefault();
        
        var userData = {
            username: emailRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            firstname: firstname.current.value,
            lastname: lastname.current.value
        }

        axios.get('/api/register', {
            params: userData
          })
          .then(function (response) {
            console.log(response);
            window.location.replace("/")

          })
          .catch(function (error) {
              //throw generic error
            console.log(error);
          })
         
        console.log("THIS IS THE STATE", userData)
    };
    
    return (
        <form className="form-group" onSubmit={handleFormSubmit} >
            <div className="form-group">
                <label className="taskAdd"><h3>Register</h3></label>
                <br></br>
                <input className="col-12 form-control" ref={emailRef} type="text"
                    name="email"
                    placeholder="Email"
                />
                <input className="col-12 form-control" ref={passwordRef} type="text"
                    name="password"
                    placeholder="Password"
                />
                 <input className="col-12 form-control" ref={firstname} type="text"
                    name="firstname"
                    placeholder="First Name"
                />
                 <input className="col-12 form-control" ref={lastname} type="text"
                    name="lastname"
                    placeholder="Last Name"
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default RegisterPage;
import React, { useRef } from 'react';
// import API from "../../utils/API";

const LoginForm = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleFormSubmit = e => {
        e.preventDefault();
        // alert("works")

        // creFormusing form data & dropdown
        var userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        console.log("THIS IS THE STATE", userData)

    };

    return (
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
    )
}

export default LoginForm;
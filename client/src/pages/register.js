import React, { useRef } from 'react';
import axios from 'axios';

// import API from "../../utils/API";
const RegisterPage = (props) => {
    // const [userForm, setUserForm] = useState({
    //     email: "",
    //     password: "",
    // });
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstname = useRef();
    const lastname = useRef();
    // useEffect(() => {
    //     console.log();
    // }, []);
    //Form Submit Function
    const handleFormSubmit = e => {
        e.preventDefault();
        // alert("works")
        // creFormusing form data & dropdown
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
              //check for errors response.data.error
            console.log(response);

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
                 <input className="col-12 form-control" ref={firstname} type="text"
                    name="firstname"
                    placeholder="input first name"
                />
                 <input className="col-12 form-control" ref={lastname} type="text"
                    name="lastname"
                    placeholder="input last name"
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default RegisterPage;
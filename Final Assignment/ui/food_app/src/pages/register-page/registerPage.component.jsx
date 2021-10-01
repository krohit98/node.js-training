import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/register-form/registerForm.component';
import loginSuccessAction from '../../actions/login-actions/loginSuccessAction';
import { useHistory } from 'react-router';

const RegisterPage = () =>{

    const dispatch = useDispatch();
    const history = useHistory();

    const [currentState, setNewState] = useState({error:null});

    const loginUser = (response) =>{
        const user_id = response._id;
        const user_name = `${response.firstName} ${response.lastName}`;
        const user_token = response.token;
        localStorage.setItem("user_token", user_token);
        dispatch(loginSuccessAction({user_name:user_name, user_id:user_id, user_token:user_token}));
        history.push("/");
    }

    async function registerUser(payload){
        try{
            const response = await axios.post("http://localhost:5000/register", payload);
            loginUser(response.data.addedUser);
        }
        catch(error){
            let errorStatement;
            if(error.response)
                errorStatement = error.response.data;
            else
                errorStatement = error.message;

            setNewState({user:{}, error:errorStatement});
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if(firstName && lastName && email && password){
            const registerState = {firstName, lastName, email, password};
            registerUser(registerState);
        }
        document.getElementById("registerForm").reset();
    }

    return(
        <div className="pageDiv">
            <h1 className="display-3 pageHeading">Sign-Up for a New Account</h1>
            <RegisterForm submitHandler={submitHandler}/>
            {currentState.error?
                <div className="alert-danger response-div">
                    <p className="h4">User cannot be registered!</p>
                    <b>Error</b>:<br/> {currentState.error}
                </div>
            :''}
        </div>
    )
}

export default RegisterPage;
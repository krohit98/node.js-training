import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import loginRequestAction from '../../actions/login-actions/loginRequestAction';
import logoutRequestAction from '../../actions/login-actions/logoutRequestAction';
import LoginForm from '../../components/login-form/loginForm.component';

const LoginPage = () =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()

    const loginState = useSelector(state => state.login);
    const [currentState, setNewState] = useState({error:null})

    if(loginState.user_id)
        history.push("/");

    if(loginState.error){
        setNewState({error:loginState.error});
        dispatch(logoutRequestAction());
    }
        
    const submitHandler =(e)=>{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if(email && password){
            const credentials = {email, password};
            dispatch(loginRequestAction(credentials));
            history.push(location)
        }
        document.getElementById("loginForm").reset();
    }

    return(
        <div className="pageDiv">
            <h1 className="display-3 pageHeading">Sign-In to an Existing Account</h1>
            <LoginForm submitHandler={submitHandler}/>
            {currentState.error?
                <div className="alert-danger response-div">
                    <p className="h4">User cannot be logged-in</p>
                    <b>Error</b>:<br/> {currentState.error}
                </div>
            :''}
        </div>
    )
}

export default LoginPage;
import React from 'react';

const LoginForm = ({submitHandler}) =>{

    return(
        <div className="app-form">
            <form className="w-50" id="loginForm" onSubmit={submitHandler}>
                <div className="mb-2">
                    <input className="form-control" type="email" id="email" placeholder="Enter your Email ID" required/>
                </div>
                <div className="mb-3">
                    <input className="form-control" type="password" id="password" placeholder="Enter your password" required/>
                </div>
                <div>
                    <button className="btn app-btn">Login Now!</button>
                </div>
            </form>
        </div>
        
    )
}

export default LoginForm;
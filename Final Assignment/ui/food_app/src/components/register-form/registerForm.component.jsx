import React from 'react';

const RegisterForm = ({submitHandler}) =>{

    return(
        <div className="app-form">
            <form className="w-50" id="registerForm" onSubmit={submitHandler}>
                <div className="mb-2">
                    <input className="form-control" type="text" id="firstName" placeholder="Enter your First Name" required/>
                </div>
                <div className="mb-2">
                    <input className="form-control" type="text" id="lastName" placeholder="Enter your Last Name" required/>
                </div>
                <div className="mb-2">
                    <input className="form-control" type="email" id="email" placeholder="Enter your Email" required/>
                </div>
                <div className="mb-3">
                    <input className="form-control" type="password" id="password" placeholder="Enter your Password" minLength="8" required/>
                </div>
                <div>
                    <button className="btn app-btn">Register Now!</button>
                </div>
            </form> 
        </div>
        
    )
}

export default RegisterForm;
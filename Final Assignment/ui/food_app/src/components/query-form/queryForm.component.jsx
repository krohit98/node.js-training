import React from 'react';
import './queryForm.component.css';

const QueryForm = ({submitHandler}) =>{

    return(
        <div className="app-form">
            <form className="w-50" id="queryForm" onSubmit={submitHandler}>
                <div className="mb-2">
                    <input className="form-control" type="text" id="nameField" placeholder="Enter your name" required/>
                </div>
                <div className="mb-2">
                    <input className="form-control" type="number" id="contactField" placeholder="Enter your contact number" required/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" type="text" id="queryField" placeholder="What's your query?" rows='5' required/>
                </div>
                <div>
                    <button className="btn app-btn">Submit Query</button>
                </div>
            </form>
        </div>
        
    )
}

export default QueryForm;
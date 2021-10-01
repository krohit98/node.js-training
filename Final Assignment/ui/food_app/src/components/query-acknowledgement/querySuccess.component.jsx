import React from 'react';

const QuerySuccess = ({queryObject}) => {
    return(
        <div className = "alert-success response-div">
            <p className="h4">Query created successfully!</p>
            <b>Query Id</b>: {queryObject._id}<br/>
            <b>User Name</b>: {queryObject.user}<br/>
            <b>User Contact</b>: {queryObject.contact}<br/>
            <b>Query</b>:<br/> {queryObject.query}<br/><br/>
            <i>We will get to you ASAP!</i>
        </div>
    )
}

export default QuerySuccess;
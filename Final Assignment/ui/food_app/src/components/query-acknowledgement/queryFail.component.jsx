import React from 'react';

const QueryFail = ({error}) =>{
    return(
        <div className="alert-danger response-div">
            <p className="h4">Query cannot be created!</p>
            <b>Error</b>:<br/> {error}
        </div>
    )
}

export default QueryFail;
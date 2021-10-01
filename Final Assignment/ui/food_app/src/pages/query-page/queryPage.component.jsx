import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import QueryFail from '../../components/query-acknowledgement/queryFail.component';
import QuerySuccess from '../../components/query-acknowledgement/querySuccess.component';
import QueryForm from '../../components/query-form/queryForm.component';

const QueryPage = () =>{

    const props = useParams();

    const[currentState, setNewState] = useState({queryObject : {}, postError : null});

    async function postQuery(payload){
        try{
            const response = await axios.post("http://localhost:5000/createQuery",payload);
            setNewState({queryObject : response.data, postError:null});
        }
        catch(error){
            let errorStatement;
            if(error.response)
                errorStatement = error.response.data;
            else
                errorStatement = error.message;
            setNewState({queryObject : {}, postError : errorStatement});
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const user = document.getElementById("nameField").value;
        const contact = document.getElementById("contactField").value;
        const query = document.getElementById("queryField").value;
        const restaurant = props.name;
        if(user && contact && query && restaurant){
            const queryState = {user,restaurant,contact,query};
            postQuery(queryState);
        }
        document.getElementById("queryForm").reset();       
    }

    return(
        <div className="pageDiv">
            <h1 className="display-3 pageHeading">{props.name}</h1>
            <h3 className="display-6">Ask us what's on your mind.</h3>
            <QueryForm submitHandler = {submitHandler}/>
            {Object.keys(currentState.queryObject).length>0?<QuerySuccess queryObject={currentState.queryObject}/>:''}
            {currentState.postError?<QueryFail error={currentState.postError}/>:''}
        </div>
    )
}

export default QueryPage;
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import removeAction from '../../../actions/removeAction';

const FormRemove = ()=>{

    const initialState = useSelector(state=>state.tasks);

    const [currentState, setNewState] = useState(initialState);

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        let data = currentState;
        //console.log(data);
        dispatch(removeAction(data));
    }

    const changeHandler = () =>{
        const id=document.getElementById("deleteTask").value;
        currentState.splice([id-1],1);
        const newState = currentState;
        //console.log(currentState);
        setNewState(newState);
    }

    return(
        <form onSubmit = {submitHandler}>
            <label for="deleteTask">Enter Task ID to Delete: </label>
            <input id="deleteTask" type="text" onBlur={()=>changeHandler()}/>
            <Link to="/">
            <button>Delete Task</button>
            </Link>
        </form>
    )
}
export default FormRemove;
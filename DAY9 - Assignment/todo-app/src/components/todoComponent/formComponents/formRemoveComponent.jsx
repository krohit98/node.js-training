import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import removeAction from '../../../actions/removeAction';

const FormRemove = ()=>{

    const initialState = useSelector(state=>state.tasks);

    const [currentState, setNewState] = useState(initialState);

    const dispatch = useDispatch();

    const history = useHistory();

    const submitHandler = (e) =>{
        e.preventDefault();
        let data = currentState;
        console.log(data);
        dispatch(removeAction(data));
        history.push('/');
    }

    const changeHandler = () =>{
        const id=document.getElementById("deleteTask").value;
        console.log(id);
        currentState.splice([id-1],1);
        const newState = currentState;
        console.log(currentState);
        setNewState(newState);
        document.getElementByTag("deleteTask")
    }

    return(
        <form onSubmit = {submitHandler}>
            <label for="deleteTask">Enter Task ID to Delete: </label>
            <input id="deleteTask" type="text" onBlur={()=>changeHandler()}/>
            <button>Delete Task</button>
        </form>
    )
}
export default FormRemove;
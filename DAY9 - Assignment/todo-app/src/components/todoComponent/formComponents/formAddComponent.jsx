import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import addAction from '../../../actions/addAction';

const FormAdd = ()=>{

    const initialState = useSelector(state=>state.tasks);

    const [currentState, setNewState] = useState(initialState);

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        let data = currentState;
        dispatch(addAction(data));
    }

    const changeHandler = () =>{
        let list = [...currentState];
        const newState = [...list,{
            id:currentState.length + 1,
            task:document.getElementById("newTask").value,
            complete:false
        }];
        setNewState(newState);
    }

    return(
        <form onSubmit={submitHandler}>
            <label for="newTask">Enter New Task to Add: </label>
            <input id="newTask" type="text" onBlur={()=>changeHandler()}/>
            <button >Add Task</button>
        </form>
    )
}
export default FormAdd;
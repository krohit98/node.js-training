import React from 'react';
import FormAdd from './formAddComponent';
import FormRemove from './formRemoveComponent';

const TodoForm=()=>{
    return(
        <div>
            <FormAdd/>
            <FormRemove />
        </div>
    )
}

export default TodoForm;
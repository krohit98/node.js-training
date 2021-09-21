import React from 'react';
import TodoForm from './formComponents/todoFormComponent';
import TodoList from './listComponents/todoListComponent';

const Todo = ()=>{
    return(
        <div>
            <TodoList />
            <TodoForm />
        </div>       
    )
}

export default Todo;
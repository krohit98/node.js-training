import React from 'react';
import './todoTasks.css';
import './todoTasks.js';

const TodoTasks = ({...item}) =>{
    return(
        <tr>
            <td>{item.id}</td>
            <td className={item.complete?"todoTask finished":"todoTask"}>{item.task}</td>
        </tr>
    )
}

export default TodoTasks;
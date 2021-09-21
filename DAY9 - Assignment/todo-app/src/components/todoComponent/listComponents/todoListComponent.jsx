import React from 'react';
import {useSelector} from 'react-redux';
import TodoTasks from './todoTasks';

const TodoList=()=>{
    const todoTasks = useSelector(state=>state.tasks);

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TASK</th>
                </tr>
                </thead>
                <tbody>
                    {todoTasks.map(item=>{
                        return(
                            <TodoTasks key={item.id} {...item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;
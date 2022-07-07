import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


const TodoList = () => {
    const todos = useSelector((state) => {
        return state.tasks;
    });

    return (
        <ul className="task-list">
            {todos.map((item , i) => (
                <TodoItem key={i} id={item.id} title={item.name} completed={item.status} />
            ))}

        </ul>
    )
}

export default TodoList;
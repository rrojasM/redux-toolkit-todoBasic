import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TASK } from "../redux/taskSlince";


const TodoItem = ({ id, title }) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(
            DELETE_TASK({
                id: id
            })
        )
    }

    return (
        <li className="task-item">
            <div>{title}</div>
            <div>
                <button className="remove-task-button" onClick={() => { removeTask() }}>
                    Eliminar
                </button>
            </div>
        </li>
    )
}


export default TodoItem;
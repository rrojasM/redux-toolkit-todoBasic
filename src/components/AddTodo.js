import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../redux/taskSlince';

const AddTodo = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();


    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
            alert("Ingrese Una Tarea!");
            setValue("");
            return;
        }

        dispatch(
            ADD_TASK({
                task: value
            })
        );

        setValue("");
    }


    return (
        <div className="add-todo">
            <input
                type="text"
                className="task-input"
                placeholder="Agregar Tarea"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />

            <button
                className="task-button"
                onClick={onSubmit}
            >
                Guardar
            </button>
        </div>
    )

}



export default AddTodo;

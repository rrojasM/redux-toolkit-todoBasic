import { createSlice } from "@reduxjs/toolkit";


export const taskSlince = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
});

export const { addTask, deleteTask } = taskSlince.actions;

export default taskSlince.reducer;
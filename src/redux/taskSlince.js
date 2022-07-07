import { createSlice } from "@reduxjs/toolkit";


const min = 1;
const max = 10000;
const rand = (Math.random() * (max - min + 1));
console.log(rand);
export const taskSlince = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        ADD_TASK: (state, action) => {
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        DELETE_TASK: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
});

export const { ADD_TASK, DELETE_TASK } = taskSlince.actions;

export default taskSlince.reducer;
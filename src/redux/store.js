import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlince';



export default configureStore({
    reducer: {
        tasks: taskReducer
    }
})
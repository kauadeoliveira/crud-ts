import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";



interface Tasks {
    tasks: Task[];
}

const initialState: Tasks = {
    tasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({...action.payload, id: Math.floor(Math.random()*100)})
        }
    }
})
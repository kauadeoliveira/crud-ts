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
            if(state.tasks.length < 1){
                state.tasks.push({...action.payload, id: 1});
            }
            else{
                const lastId = state.tasks[state.tasks.length -1].id
                state.tasks.push({...action.payload, id: lastId + 1});
            }
        }
    }
})
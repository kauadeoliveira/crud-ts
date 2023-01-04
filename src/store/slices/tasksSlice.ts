import { createSlice } from "@reduxjs/toolkit";
import { TaskProps } from "../../types";

interface Tasks {
    incompleteTasks: TaskProps[];
    completeTasks: TaskProps[];
}

const initialState: Tasks = {
    incompleteTasks: [],
    completeTasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if(state.incompleteTasks.length < 1){
                state.incompleteTasks.push({...action.payload, id: 1, completed: false});
            }
            else{
                const lastId = state.incompleteTasks[state.incompleteTasks.length -1].id
                state.incompleteTasks.push({...action.payload, id: lastId + 1, completed: false});
            }
        },
        completeTask: (state, action) => {
            const completeTask = state.incompleteTasks.filter(task => task.id === action.payload);
            state.completeTasks.push({...completeTask[0], completed: true})
            
            state.incompleteTasks = state.incompleteTasks.filter(task => task.id != action.payload);
        }
    }
})
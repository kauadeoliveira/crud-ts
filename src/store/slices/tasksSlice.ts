import { createSlice } from "@reduxjs/toolkit";
import { TaskProps } from "../../types";

interface Tasks {
    tasks: TaskProps[];
    filtredTasks: TaskProps[];
}

const initialState: Tasks = {
    tasks: [],
    filtredTasks: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if(state.tasks.length < 1){
                state.tasks.push({...action.payload, id: 1, completed: false});
            }
            else{
                const lastId = state.tasks[state.tasks.length -1].id
                state.tasks.push({...action.payload, id: lastId + 1, completed: false});
            }

            state.tasks = state.tasks.sort((a, b) => a.id - b.id)
        },
        completeTask: (state, action) => {
            const taskSelected = state.tasks.filter(task => task.id === action.payload.id);
            state.tasks = state.tasks.filter(task => task.id != action.payload.id)

            state.tasks.push({...taskSelected[0], completed: !action.payload.completed})
            
            state.tasks = state.tasks.sort((a, b) => a.id - b.id)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload);
            state.filtredTasks = state.filtredTasks.filter(task => task.id != action.payload);

            state.tasks = state.tasks.sort((a, b) => a.id - b.id);
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload.id);
            state.tasks.push({...action.payload})

            state.tasks = state.tasks.sort((a, b) => a.id - b.id)
        },
        search: (state, action) => {
            state.filtredTasks = state.tasks.filter(task => action.payload != '' && (task.title.toLowerCase()).includes(action.payload.toLowerCase()))
        }
    }
})
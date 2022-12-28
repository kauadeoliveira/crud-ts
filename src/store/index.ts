import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./slices/modalSlice";
import { tasksSlice } from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        task: tasksSlice.reducer
    }
})
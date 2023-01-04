import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./slices/modalSlice";
import { tasksSlice } from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        tasks: tasksSlice.reducer
    }
})
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { modalSlice } from "./slices/modalSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }
})
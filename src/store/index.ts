import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./slices/modalSlice";
import { searchBarSlice } from "./slices/searchBarSlice";
import { tasksSlice } from "./slices/tasksSlice";
import { themeSlice } from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer,
        tasks: tasksSlice.reducer,
        searchBar: searchBarSlice.reducer,
        theme: themeSlice.reducer,
    }
});
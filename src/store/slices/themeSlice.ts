import { createSlice } from "@reduxjs/toolkit";

interface Theme{
    mode: 'light' | 'dark';
}

const initialState:Theme = {
    mode: "dark",
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchMode(state, action){
            state.mode = action.payload;
        }
    }
})
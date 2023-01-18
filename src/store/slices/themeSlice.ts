import { createSlice } from "@reduxjs/toolkit";

interface Theme{
    dark: boolean;
}

const initialState:Theme = {
    dark: true,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchtTheme(state){
            state.dark = !state.dark;
        }
    }
})
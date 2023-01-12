import { createSlice } from "@reduxjs/toolkit";

interface SearchBar {
    focused: boolean;
}

const initialState: SearchBar = {
    focused: false
} 

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        onFocus: (state) => {
            state.focused = true;
        },
        onBlur: (state) => {
            state.focused = false;
        }
    }
}) 
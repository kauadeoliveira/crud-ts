import { createSlice } from "@reduxjs/toolkit";

interface SearchBar {
    focused: boolean;
    inputValue: string;
}

const initialState: SearchBar = {
    focused: false,
    inputValue: '',
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
        },
        onChange: (state, action) => {
            state.inputValue = action.payload
        }
    }
}) 
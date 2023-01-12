import { SearchContainer, SearchIcon, SearchInput } from "./style";
import searchIcon from "../../assets/images/search.svg"
import searchFocus from "../../assets/images/search-focus.svg"
import close from "../../assets/images/close.svg"
import closeHover from "../../assets/images/close-hover.svg"
import React, { useEffect, useState } from "react";
import { tasksSlice } from "../../store/slices/tasksSlice"
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchBarSlice } from "../../store/slices/searchBarSlice";

export default function SearchBar() {
    const searchInputRef = React.createRef<HTMLInputElement>();
    const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);

    const { search } = tasksSlice.actions;
    const dispatch = useDispatch();
    const { focused } = useAppSelector(store => store.searchBar);
    const { onFocus } = searchBarSlice.actions;
    const { onBlur } = searchBarSlice.actions;

    const handleSearchFocus = () => focused ? dispatch(onBlur()) : dispatch(onFocus())
    const handleSearchTasks = () => dispatch(search(searchInputRef.current?.value))

    // Sempre que o array de task for atualizado será chamado a action "search" que também atualizará o array de "filtredTasks"
    useEffect(() => {
        dispatch(search(searchInputRef.current?.value))
    }, [store.getState().tasks.tasks])

    return(
        <SearchContainer focus={focused}>
            <SearchIcon icon={[searchIcon, searchFocus]} focus={focused}/>
            <SearchInput
             type="search"
             icon={[close, closeHover]}
             placeholder="search"
             ref={searchInputRef}
             onFocus={handleSearchFocus}
             onBlur={handleSearchFocus}
             onChange={handleSearchTasks}
            />
        </SearchContainer>
    )
}
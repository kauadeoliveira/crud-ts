import { SearchContainer, SearchIcon, SearchInput } from "./style";
import search from "../../assets/images/search.svg"
import searchFocus from "../../assets/images/search-focus.svg"
import close from "../../assets/images/close.svg"
import closeHover from "../../assets/images/close-hover.svg"
import React, { useEffect, useState } from "react";

export default function SearchBar() {
    const searchInputRef = React.createRef<HTMLInputElement>();
    const [searchBarFocus, setSearchBarFocus] = useState<boolean>(false);

    const handleSearchFocus = () => setSearchBarFocus(!searchBarFocus)

    return(
        <SearchContainer focus={searchBarFocus}>
            <SearchIcon icon={[search, searchFocus]} focus={searchBarFocus}/>
            <SearchInput
             type="search"
             icon={[close, closeHover]}
             placeholder="search"
             ref={searchInputRef}
             onFocus={handleSearchFocus}
             onBlur={handleSearchFocus}
            />
        </SearchContainer>
    )
}
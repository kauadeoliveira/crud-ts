import { NoResultFoundContainer } from "./style"
import notFoundDarkMode from "../../assets/images/detetive-darkmode.png"
import notFoundLightMode from "../../assets/images/detetive-lightmode.png"

import { useAppSelector } from "../../hooks/useAppSelector"
export default function NoResultFound() {
    const { inputValue } = useAppSelector(store => store.searchBar);
    const { mode } = useAppSelector(store => store.theme);
    return(
        <NoResultFoundContainer>
            <img src={mode === 'dark' ? notFoundDarkMode : notFoundLightMode} alt="" />
            <p>No results found for query "{inputValue}"</p>
        </NoResultFoundContainer>
    )
}
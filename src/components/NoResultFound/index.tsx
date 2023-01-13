import { NoResultFoundContainer } from "./style"
import notResultFoundContainerImg from "../../assets/images/detetive.png"
import { useAppSelector } from "../../hooks/useAppSelector"
export default function NoResultFound() {
    const { inputValue } = useAppSelector(store => store.searchBar)
    return(
        <NoResultFoundContainer>
            <img src={notResultFoundContainerImg} alt="" />
            <p>No results found for query "{inputValue}"</p>
        </NoResultFoundContainer>
    )
}
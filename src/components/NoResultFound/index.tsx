import { NoResultFoundContainer } from "./style"
import notResultFoundContainerImg from "../../assets/images/not-results-found.png"
export default function NoResultFound() {
    return(
        <NoResultFoundContainer>
            <img src={notResultFoundContainerImg} alt="" />
        </NoResultFoundContainer>
    )
}
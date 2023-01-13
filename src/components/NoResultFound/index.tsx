import { NoResultFoundContainer } from "./style"
import notResultFoundContainerImg from "../../assets/images/detetive.png"
export default function NoResultFound() {
    return(
        <NoResultFoundContainer>
            <img src={notResultFoundContainerImg} alt="" />
            <p>Não encontramos nada que corresponda sua pesquisa.</p>
        </NoResultFoundContainer>
    )
}
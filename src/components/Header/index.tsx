import Input from "../Input";
import SearchBar from "../SearchBar";
import { HeaderContainer, Logo } from "./style";

export default function Header() {
    return(
        <HeaderContainer> 
            <Logo>
                <h1>TO DO LIST</h1>
            </Logo>
            <SearchBar />
        </HeaderContainer>
    )
}
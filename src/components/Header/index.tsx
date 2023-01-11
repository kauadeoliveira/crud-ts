import Input from "../Input";
import { HeaderContainer, Logo, SearchBar } from "./style";

export default function Header() {
    return(
        <HeaderContainer> 
            <Logo>TO DO LIST</Logo>
            <SearchBar>
                <Input type="text"/>
            </SearchBar>
        </HeaderContainer>
    )
}
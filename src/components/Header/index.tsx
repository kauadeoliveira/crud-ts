import Input from "../Input";
import SearchBar from "../SearchBar";
import { HeaderContainer, HeaderIconButton, HeaderNav, Logo } from "./style";
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import githubHover from "../../assets/images/github-hover.svg"
import linkedinHover from "../../assets/images/linkedin-hover.svg"

export default function Header() {
    return(
        <HeaderContainer>
            <Logo>
                <h1>TO DO</h1>
            </Logo>
            <SearchBar />
            <HeaderNav>
                <ul>
                    <li>
                        <HeaderIconButton icon={[github, githubHover]} href="#"/>
                    </li>
                    <li>
                        <HeaderIconButton icon={[linkedin, linkedinHover]} href="#"/>
                    </li>
                </ul>
            </HeaderNav>
        </HeaderContainer>
    )
}
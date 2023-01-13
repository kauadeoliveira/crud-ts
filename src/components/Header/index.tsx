import { 
    HeaderContainer,
    HeaderIconButton,
    HeaderNav,
    Logo
} from "./style";

import SearchBar from "../SearchBar";
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import githubHover from "../../assets/images/github-hover.svg"
import linkedinHover from "../../assets/images/linkedin-hover.svg"

export default function Header() {
    return(
        <HeaderContainer>
            <Logo>
                <span>TO</span>
                <span>DO</span>
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
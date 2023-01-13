import { 
    HeaderContainer,
    HeaderIconButton,
    HeaderNav,
} from "./style";

import SearchBar from "../SearchBar";
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import githubHover from "../../assets/images/github-hover.svg"
import linkedinHover from "../../assets/images/linkedin-hover.svg"
import Logo from "../Logo";

export default function Header() {
    return(
        <HeaderContainer>
            <Logo />
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
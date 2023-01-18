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
import moon from "../../assets/images/moon.png"
import ThemeSwitchButton from "../ThemeSwitchButton";

export default function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <SearchBar />
            <HeaderNav>
                <ul>
                    <li>
                        <ThemeSwitchButton />
                    </li>
                </ul>
            </HeaderNav>
        </HeaderContainer>
    )
}


// PENSANDO EM REMOVER AS REDES SOCIAIS E DEIXAR SÓ O THEME BUTTON
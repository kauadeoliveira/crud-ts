import { 
    HeaderContainer,
    HeaderIconButton,
    HeaderNav,
} from "./style";

import SearchBar from "../SearchBar";
import Logo from "../Logo";
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
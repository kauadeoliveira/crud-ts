import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { modalSlice } from "../../store/slices/modalSlice";
import AddTaskButton from "../NewTaskButton";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { NavbarBody, NavBarContainer, NavbarHead, NavBarMain, NavBarSocialItem, NavBarSocials } from "./style";
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import githubHover from "../../assets/images/github-hover.svg"
import linkedinHover from "../../assets/images/linkedin-hover.svg"
import ThemeSwitchButton from "../ThemeSwitchButton";

export default function NavBar() {
    const dispatch = useDispatch()
    const { openModalCreateTask } = modalSlice.actions

    const handleOpenModal = () => dispatch(openModalCreateTask())
    return(
        <NavBarContainer>
            <NavbarHead>
                <Logo />
            </NavbarHead>
            <NavbarBody>
                <NavBarMain>
                    <li>
                        <SearchBar />
                    </li>
                    <li>
                        <AddTaskButton onClick={handleOpenModal}/>
                    </li>
                    <li>
                      <ThemeSwitchButton />
                    </li>
                </NavBarMain>
                <NavBarSocials>
                    <li>
                        <NavBarSocialItem>
                            <img src={github} alt="" className="social-icon"/>
                            <span className="social-name">GitHub</span>
                        </NavBarSocialItem>
                    </li>
                    <li>
                        <NavBarSocialItem>
                            <img src={linkedin} alt="" className="social-icon"/>
                            <span className="social-name">LinkedIn</span>
                        </NavBarSocialItem>
                    </li>
                </NavBarSocials>
            </NavbarBody>
        </NavBarContainer>
    )
}

// PENSANDO EM REMOVER AS REDES SOCIAIS E DEIXAR SÓ UM SWITCH THEME BUTTON
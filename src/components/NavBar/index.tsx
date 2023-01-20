import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/slices/modalSlice";
import AddTaskButton from "../NewTaskButton";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { NavbarBody, NavBarContainer, NavbarHead, NavBarMain, NavBarSocialItem, NavBarSocials } from "./style";
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
                      <ThemeSwitchButton />
                    </li>
                    <li>
                        <AddTaskButton onClick={handleOpenModal}/>
                    </li>
                </NavBarMain>

            </NavbarBody>
        </NavBarContainer>
    )
}

// PENSANDO EM REMOVER AS REDES SOCIAIS E DEIXAR SÓ UM SWITCH THEME BUTTON
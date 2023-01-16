import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { modalSlice } from "../../store/slices/modalSlice";
import AddTaskButton from "../AddTaskButton";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { NavbarBody, NavBarContainer, NavbarHead, NavBarMain, NavBarSocialItem, NavBarSocials } from "./style";
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import githubHover from "../../assets/images/github-hover.svg"
import linkedinHover from "../../assets/images/linkedin-hover.svg"

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
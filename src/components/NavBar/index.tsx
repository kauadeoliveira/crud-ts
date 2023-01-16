import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { modalSlice } from "../../store/slices/modalSlice";
import AddTaskButton from "../AddTaskButton";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { NavbarBody, NavBarContainer, NavbarHead } from "./style";

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
                <ul>
                    <li>
                        <SearchBar />
                    </li>
                    <li>
                        <AddTaskButton onClick={handleOpenModal}/>
                    </li>
                </ul>
            </NavbarBody>
        </NavBarContainer>
    )
}
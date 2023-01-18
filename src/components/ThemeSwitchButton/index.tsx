import { ToggleButtonContainer } from "./style";
import { HiMoon, HiSun } from "react-icons/hi";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { themeSlice } from "../../store/slices/themeSlice";

export default function ThemeSwitchButton() {
    const { mode } = useAppSelector(store => store.theme);
    const { switchMode } = themeSlice.actions
    const dispatch = useDispatch();

    const switchToLightMode = () => dispatch(switchMode('light'));
    const switchToDarkMode = () => dispatch(switchMode('dark'))
    return(
        <ToggleButtonContainer mode={mode}>
            <div className="light" onClick={switchToLightMode}>
                <HiSun />
                <span>Light</span>
            </div>
            <div className="dark" onClick={switchToDarkMode}>
                <HiMoon />
                <span>Dark</span>
            </div>
        </ToggleButtonContainer>
    )
}
























    // <ToggeButtonContainer>
    //     <input type="checkbox" id="darkmode-toggle" />
    //     <label htmlFor="darkmode-toggle">
    //         <HiSun className="sun"/>
    //         <HiMoon className="moon"/>
    //     </label>
    // </ToggeButtonContainer>
import { ToggleButtonContainer } from "./style";
import moon from "../../assets/images/moon.svg"
import { useAppSelector } from "../../hooks/useAppSelector";
import { themeSlice } from "../../store/slices/themeSlice";
import { useDispatch } from "react-redux";
import { HiSun, HiMoon } from "react-icons/hi"

export default function ThemeSwitchButton() {
    const { mode } = useAppSelector(store => store.theme);
    const { switchMode } = themeSlice.actions
    const dispatch = useDispatch();

    const switchToDarkMode = () => dispatch(switchMode('dark'));
    const switchToLightMode = () => dispatch(switchMode('light'))

    // apenas mobile
    const handleSwitchMode = () => dispatch(switchMode(mode === 'light' ? 'dark' : 'light'))
    return(
        <>
        <ToggleButtonContainer mode={mode}>
            <div className="light" onClick={switchToLightMode}>
                <HiSun />
                <span>Light</span>
            </div>
            <div className="dark" onClick={switchToDarkMode}>
                <HiMoon />
                <span>Dark</span>
            </div>
            <div className="icon-button" onClick={handleSwitchMode}>
                {mode === 'light' ? <HiSun /> : <HiMoon />}
            </div>
        </ToggleButtonContainer>
        </>
    )
}
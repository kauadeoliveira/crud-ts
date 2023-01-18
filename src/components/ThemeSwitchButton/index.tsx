import { ToggeButtonContainer } from "./style";
import moon from "../../assets/images/moon.svg"

export default function ThemeSwitchButton() {
<<<<<<< HEAD
    const { mode } = useAppSelector(store => store.theme);
    const { switchMode } = themeSlice.actions
    const dispatch = useDispatch();

    const handleSwitchMode = () => dispatch(switchMode(mode === 'light' ? 'dark' : 'light'))
    return(
        <>
        <ToggleButtonContainer mode={mode}>
            <div className="light" onClick={handleSwitchMode}>
                <HiSun />
                <span>Light</span>
            </div>
            <div className="dark" onClick={handleSwitchMode}>
                <HiMoon />
                <span>Dark</span>
            </div>
            <div className="icon-button" onClick={handleSwitchMode}>
                {mode === 'light' ? <HiSun /> : <HiMoon />}
            </div>
        </ToggleButtonContainer>
        </>
=======
    return(
        <ToggeButtonContainer>
            <input type="checkbox" id="darkmode-toggle" />
            <label htmlFor="darkmode-toggle">
            </label>
        </ToggeButtonContainer>
>>>>>>> parent of 90a21fa (feat: implement themeSwitchButton)
    )
}
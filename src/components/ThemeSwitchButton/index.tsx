import { ToggeButtonContainer } from "./style";
import moon from "../../assets/images/moon.svg"

export default function ThemeSwitchButton() {
    return(
        <ToggeButtonContainer>
            <input type="checkbox" id="darkmode-toggle" />
            <label htmlFor="darkmode-toggle">
            </label>
        </ToggeButtonContainer>
    )
}
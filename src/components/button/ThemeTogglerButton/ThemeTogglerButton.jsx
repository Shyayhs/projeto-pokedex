import { useContext } from "react";
import { ThemeContext, themes } from "../../../contexts/theme-context";
import Button from "../button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <Div>
            <ThemeButton style={{ backgroundColor: theme.color }} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} value={<FontAwesomeIcon style={{ color: theme.mainBackground }} icon={faPalette} />} ></ThemeButton>
        </Div>
    )
};

const ThemeButton = styled(Button)`
    width: 100px;
`
    
const Div = styled.div`
    align-self: end;
    display: flex;
    position: fixed;
    right: 15px;
    top: 15px;
`
import { ThemeContext } from "../contexts/theme-context";
import { ThemeTogglerButton } from '../components/button/ThemeTogglerButton/ThemeTogglerButton';
import Pokedex from "../components/pokedex";
import { useContext } from "react";
import styled, { css } from 'styled-components';
import { getColorByType, colorTypes } from "../contexts/color-type-context";

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <BackDiv $background={theme.secondaryBackground}>
            <ThemeTogglerButton/>

            <Select multiple>
                <AllPokemons value={"All"}>All</AllPokemons>
                {colorTypes.map((type, index) => {
                    return <Option key={index} $colorTypes={colorTypes} value={type.type}>{type.type}</Option>
                })}
            </Select>

            <FrontDiv $background={theme.mainBackground}>
                <Pokedex/>
            </FrontDiv>
        </BackDiv>
    )
}

const BackDiv = styled.div`
    background: ${props => props.$background};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
`

const FrontDiv = styled.div`
    background: ${props => props.$background};
    align-self: center;
    margin: 50px 0;
`

const Select = styled.select`
    background:rgb(48, 48, 48);
    padding: 5px 20px;
    align-self: end;
    top: 65px;
    right: 15px;
    position: fixed;
    border-radius: 6px;
    color: #ffffff;
`

const AllPokemons = styled.option`
    font-size: 18px;
    border-radius: 6px;
    text-align: center;
    padding: 2px 10px;
    cursor: pointer;
    
    &:checked, &:hover, &:focus, &:active {
        background:rgb(48, 48, 48) !important;
        color: #ffffff;
        padding: 1px 9px;
        border: 1px solid #ffffff;
    }
`

const Option = styled.option`
    font-size: 18px;
    border-radius: 6px;
    text-align: center;
    padding: 2px 10px;
    cursor: pointer;

    ${props => props.value && css`
        color: ${getColorByType(props.value, props.$colorTypes)};
    `}

    &:checked, &:hover, &:focus, &:active {
        background:rgb(48, 48, 48) !important;

        ${props => props.value && css`
            color: ${getColorByType(props.value, props.$colorTypes)};
        `}
        
        ${props => props.value && css`
            padding: 1px 9px;
            border: 1px solid ${getColorByType(props.value, props.$colorTypes)};
        `}
    }
`

export { Home };
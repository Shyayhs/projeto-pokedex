import PokemonDetails from "../components/pokemon-details";
import { useParams } from "react-router-dom";
import { ThemeTogglerButton } from '../components/button/ThemeTogglerButton/ThemeTogglerButton';
import styled from 'styled-components';

const PokemonPage = () => {
  const { name } = useParams();
  
  return (
    <Div>
      <ThemeTogglerButton/>
      <PokemonDetails name={name} />
    </Div>
  );
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export { PokemonPage };
import styled from "styled-components";
import PokemonCard from "../PokemonCard";

const PokemonList = (props) => {
    if (!props.pokemons) {
        return <p>Erro: Lista de Pokémon não fornecida.</p>;
    }

    if (props.pokemons.length === 0) {
        return <p>Nenhum Pokémon encontrado.</p>;
    }
    
    return (
        <PokeList>
            {props.pokemons.map((pokemon, index) => {
                const pokeUrl = pokemon.pokemon ? pokemon.pokemon.url : pokemon.url;
                
                if (index < (props.pokedex.offset+props.pokedex.limit)) {
                    return (
                        <li key={index}>
                            <PokemonCard url={pokeUrl} />
                        </li> 
                    ) 
                }
            })}
        </PokeList>
    );
};

const PokeList = styled.ul`
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default PokemonList;
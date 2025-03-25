import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorTypes, getColorByType } from "../../contexts/color-type-context";

async function getPokemon(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na busca da API: ${response.status}`);
        }
        
        return await response.json();
    } catch(erro) {
        console.error("Erro ao buscar os Pokémons:", erro);
    }
}

export default function PokemonCard(props) {
    const [pokemon, setPokemon] = useState({ specs: {} })
    const url = props.url;

    useEffect(() => {
        const fecthData = async () => {
            try {
                const data = await getPokemon(url);
            
                setPokemon({
                    specs: data
                })
            } catch(erro) {
                console.error("Erro ao carregar dados dos Pokémons:", erro);
            }
        }
        fecthData();
    }, [url])
    
    return (
        <Div>
            <Link to={`/pokemon/${pokemon.specs.name}`}>
                <Image src={pokemon.specs.sprites ? pokemon.specs.sprites.front_default : <p>Loading image ...</p>} alt={pokemon.specs.name} $types={pokemon.specs.types} $colorTypes={colorTypes}/>

                <Title>{pokemon.specs.name}</Title>
                
                {pokemon.specs.types && pokemon.specs.types.length > 0 ? (pokemon.specs.types.map((types, index) => (
                    <Text $name={types.type.name} key={index} $colorTypes={colorTypes}>{types.type.name}</Text>
                ))) : (
                    <Text>Loading types...</Text>
                )}
            </Link>
        </Div>
    )
};

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:rgb(48, 48, 48);
    padding: 15px 10px;
    border-radius: 8px;
    width: 150px;
    height: 210px;
`

const Image = styled.img`
    border-radius: 8px;
    ${props => props.$types && props.$types.length === 2 && css`
        background: linear-gradient(
            to bottom right,
            ${getColorByType(props.$types[0].type.name, props.$colorTypes)} 50%, 
            ${getColorByType(props.$types[1].type.name, props.$colorTypes)} 50%
        );
    `}
    ${props => props.$types && props.$types.length === 1 && css`
        background-color: ${getColorByType(props.$types[0].type.name, props.$colorTypes)};
    `}
    ${props => !props.$types && css`
        background-color: #eee;
    `}
`

const Title = styled.h2`
    color: #eeeeee;
    text-transform: capitalize;
    margin: 10px 0;
    text-align: center;
`

const Text = styled.p`
    ${props => props.$name && css`
        color: ${getColorByType(props.$name, props.$colorTypes)};
    `}
    text-transform: capitalize;
    margin: 0 0 5px;
`
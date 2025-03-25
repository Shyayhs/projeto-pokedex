import { useState, useEffect } from "react";
import LoadMoreButton from "../button/LoadMoreButton/LoadMoreButton.jsx";
import styled from "styled-components";
import { colorTypes, getNumberOfType } from "../../contexts/color-type-context.jsx";
import PokemonList from "../PokemonList/index.jsx";

async function createPokedex(limit, offset, type) {
    try {
        if (type == "" || type == "All") {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            
            if (!response.ok) {
                throw new Error(`Erro ao criar Pokedex sem filtro: ${response.status}`);
            }

            return await response.json();
        } else {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

            if (!response.ok) {
                throw new Error(`Erro ao criar Pokedex com filtro: ${response.status}`);
            }
            
            return await response.json();
        }
    } catch (erro) {
        console.error("Erro ao criar Pokedex:", erro);
    }
}

const Pokedex = () => { 
    const [pokedex, setPokedex] = useState({ 
        pokemons: [],
        limit: 10,
        offset: 0
    });
    
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const selectElement = document.querySelector("select");

        const handleChange = () => {
            if (selectElement.value !== "All") {
                setSelectedType(getNumberOfType(selectElement.value, colorTypes));
            }
            else {
                setSelectedType(0);
            };
        };

        selectElement.addEventListener('change', handleChange);
        
        return () => {
            selectElement.removeEventListener('change', handleChange);
        };
    }, [selectedType]);
    
    useEffect(() => {
        const fetchMainPokemonsByType = async () => {   
            try {
                const data = await createPokedex(pokedex.limit, pokedex.offset, selectedType);
                const mainPokemons = selectedType === "" || selectedType === 0 ? data.results : data.pokemon;
            
                setPokedex(prevState => ({ ...prevState, pokemons: mainPokemons, offset: 0 }));
            } catch (erro) {
                console.error("Erro ao buscar as informações do Pokemons:", erro);
            }
        };

        fetchMainPokemonsByType();

    }, [selectedType]);
    
    const addPokemons = async () => {
        try {
            const newOffset = pokedex.offset + pokedex.limit;
            const newData = await createPokedex(pokedex.limit, newOffset, selectedType);
       
            setPokedex(prevState => {
                const newPokemons = selectedType === "" || selectedType === 0 ? newData.results : newData.pokemon;
                
                return {
                    ...prevState,
                    pokemons: [...prevState.pokemons, ...newPokemons],
                    offset: newOffset
                }
            });
        } catch (erro) {
            console.error("Erro ao carregar mais Pokemons:", erro);
        }
        
    };

    const allPokemons = [ ...pokedex.pokemons ];

    return (
        <Section>
            {allPokemons.length > 0 ? (
                <>
                    <PokemonList pokemons={allPokemons} pokedex={pokedex}/>
                    <LoadMoreButton addPokemons={addPokemons} />                
                </>
            ) : (
                <P>Nenhum Pokemon Encontrado</P>
            )}
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 100px 30px;
    gap: 30px;
`

const P = styled.p`
    color: orange;
`

export default Pokedex;
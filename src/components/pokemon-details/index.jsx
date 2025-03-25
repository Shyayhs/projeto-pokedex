import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";
import { colorTypes, getColorByType } from "../../contexts/color-type-context";

async function getAbility(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na busca da API: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (erro) {
    console.error("Erro ao buscar habilidade:", erro);
  }
}

const PokemonDetails = ({ name }) => {
  const [pokemon, setPokemon] = useState({ specs: {} });
  const [abilityDetails, setAbilityDetails] = useState({});
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon({ specs: data });

        if (data.abilities) {
          const detailsPromises = data.abilities.map(ability => getAbility(ability.ability.url));
          const details = await Promise.all(detailsPromises);
          const detailsObj = {};

          data.abilities.forEach((ability, index) => {
            detailsObj[ability.ability.name] = details[index];
          });

          setAbilityDetails(detailsObj);
        }
      } catch (erro) {
        console.error("Erro ao buscar detalhes do Pokémon:", erro);
      }
    };

    fetchData();
  }, [name]);

  return (
    <Section $background={theme.secondaryBackground}>
      <DivContainer $background={theme.mainBackground} $color={theme.color}>
        <PokeLink $background={theme.color} $color={theme.mainBackground} to="/">Home</PokeLink>

        {pokemon.specs.sprites && (
          <Img src={pokemon.specs.sprites.front_default} alt={name} />
        )}

        <H2 title="name">{name}</H2>

        {pokemon.specs.types && pokemon.specs.types.length > 0 ? (pokemon.specs.types.map((types, index) => (
          <Type $name={types.type.name} key={index} $colorTypes={colorTypes}>{types.type.name}</Type>
        ))) : (
          <p>Loading types...</p>
        )}

        <DivMoves>
          <h3>Moves</h3>

          <PokeMoves>
            {pokemon.specs.moves ? (pokemon.specs.moves.map((moves, index) => (
              <li key={index}>{moves.move.name}</li>
            ))) : (
              <p>Loading moves...</p>
            )}
          </PokeMoves>
        </DivMoves>

        <DivAbilities>
          <h3>Abilities</h3>

          <PokeAbilities>
            {pokemon.specs.abilities ? (pokemon.specs.abilities.map((ability, index) => {
              const details = abilityDetails[ability.ability.name];

              return (
                <li key={index}>
                  {ability.ability.name}
              
                  {details && details.effect_entries ? ((() => {
                    const enEffect = details.effect_entries.find(entry => entry.language.name === 'en');

                    return enEffect ? (
                      <p>{enEffect.short_effect}</p>
                    ) : (
                      <p>No English description available</p>
                    );
                  })()) : (
                    <p>Loading Abilities...</p>
                  )}
                </li>
              )
            })) : (
              <p>Loading abilities...</p>
            )}
          </PokeAbilities>
        </DivAbilities>
      </DivContainer>
    </Section>
  );
};

const divBackground = "#dae0d4";

const pokeBackground = "#f3f5f1";

const PokeLink = styled(Link)`
  background: ${props => props.$background};
  color: ${props => props.$color};
  padding: 5px 15px;
  border-radius: 12px;
`

const Section = styled.section`
  background: ${props => props.$background};
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const DivContainer = styled.div`
  align-items: center;
  padding: 20px;
  margin: auto 0;
  gap: 10px;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  background: ${props => props.$background};
  color: ${props => props.$color};
  border-radius: 10px;
  width: 90%;
`

const Img = styled.img`
  width: 15%;
`

const H2 = styled.h2`
  font-size: 30px;
`

const Type = styled.p`
  font-size: 25px;
  ${props => props.$name && css`
    color: ${getColorByType(props.$name, props.$colorTypes)};
  `}
`

const DivMoves = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  border-radius: 8px;
  background: ${divBackground};
  color: black;
  overflow: hidden;
  gap: 5px;
  padding-top: 5px;
`

const PokeMoves = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100px;
  overflow-y: scroll;
  padding: 10px 15px;
  gap: 5px;
  background: ${pokeBackground};
  color: black;
`

const DivAbilities = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  border-radius: 8px;
  background: ${divBackground};
  color: black;
  overflow: hidden;
  gap: 5px;
  padding-top: 5px;
`

const PokeAbilities = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background:${pokeBackground};
  color: black;
  gap: 5px;
  font-size: 22px;
`

export default PokemonDetails;
import PokemonList from "./";
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

it("deve gerar um card para cada pokemon da pokedex, sem filtro de tipo", async () => {
    const testdex = {
        limit: 10,
        offset: 0
    }

    const pokemons = [{ name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" }, { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/"}]

    render(
        <MemoryRouter>
            <PokemonList pokemons={ pokemons } pokedex={ testdex } />
        </MemoryRouter>
    );

    await waitFor(() => {
        const wartortle = screen.getByText("wartortle")
        const pidgeotto = screen.getByText("pidgeotto")

        expect(wartortle).toBeTruthy();
        expect(pidgeotto).toBeTruthy();
    });
})

it("deve gerar um card para cada pokemon da pokedex, de acordo com o filtro de tipo", async () => {
    const testdex = {
        limit: 10,
        offset: 0
    }

    const pokemons = [{ pokemon: { name: "primeape", url: "https://pokeapi.co/api/v2/pokemon/57/" } }, { pokemon: { name: "sandslash", url: "https://pokeapi.co/api/v2/pokemon/28/" }}]

    render(
        <MemoryRouter>
            <PokemonList pokemons={ pokemons } pokedex={ testdex } />
        </MemoryRouter>
    );

    await waitFor(() => {
        const wartortle = screen.getByText("primeape")
        const pidgeotto = screen.getByText("sandslash")

        expect(wartortle).toBeTruthy();
        expect(pidgeotto).toBeTruthy();
    });
})
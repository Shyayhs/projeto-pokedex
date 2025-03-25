import { render, screen, waitFor } from "@testing-library/react";
import PokemonCard from "./";
import { MemoryRouter } from "react-router-dom";

const url = "https://pokeapi.co/api/v2/pokemon/15/";
it("deve exibir o pokemon da url na tela", async () => {
    render(
        <MemoryRouter>
            <PokemonCard url={url} />
        </MemoryRouter>
    );

    await waitFor(() => {
        const beedrill = screen.getByText("beedrill")

        expect(beedrill).toBeTruthy();
    });
})

it("deve gerar uma imagem com um texto alternativo sendo o nome do pokemon", async () => {
    render(
        <MemoryRouter>
            <PokemonCard url={url} />
        </MemoryRouter>
    );

    await waitFor(() => {
        const img = screen.getByAltText("beedrill")
        
        expect(img).toBeTruthy();
    });
})


it("deve exibir os tipos do pokemon", async () => {
    render(
        <MemoryRouter>
            <PokemonCard url={url}/>
        </MemoryRouter>
    );

    await waitFor(() => {
        const type = screen.getByText("poison")
        
        expect(type).toBeTruthy();
    });
})
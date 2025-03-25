import PokemonDetails from './';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider, themes } from '../../contexts/theme-context';

const pokeName = "diglett"

it("deve gerar uma página com as informações do pokemon", async () => {
    render(
        <MemoryRouter>
            <ThemeProvider value={{ theme: themes.dark }}>
                <PokemonDetails name={pokeName}/>
            </ThemeProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        const diglett = screen.getByText("diglett");
        
        expect(diglett).toBeTruthy();
    });
})

it("deve gerar uma imagem com um texto alternativo sendo o nome do pokemon", async () => {
    render(
        <MemoryRouter>
            <ThemeProvider value={{ theme: themes.dark }}>
                <PokemonDetails name={pokeName}/>
            </ThemeProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        const img = screen.getByAltText(pokeName)
        
        expect(img).toBeTruthy();
    });
})

it("deve exibir os tipos do pokemon", async () => {
    render(
        <MemoryRouter>
            <ThemeProvider value={{ theme: themes.dark }}>
                <PokemonDetails name={pokeName}/>
            </ThemeProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        const type = screen.getByText("ground")
        
        expect(type).toBeTruthy();
    });
})

it("deve exibir os movimentos do pokemon", async () => {
    render(
        <MemoryRouter>
            <ThemeProvider value={{ theme: themes.dark }}>
                <PokemonDetails name={pokeName}/>
            </ThemeProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        const move = screen.getByText("earthquake")
        
        expect(move).toBeTruthy();
    });
})

it("deve exibir as habilidades do pokemon", async () => {
    render(
        <MemoryRouter>
            <ThemeProvider value={{ theme: themes.dark }}>
                <PokemonDetails name={pokeName}/>
            </ThemeProvider>
        </MemoryRouter>
    );

    await waitFor(() => {
        const ability = screen.getByText("sand-force")
        
        expect(ability).toBeTruthy();
    });
})
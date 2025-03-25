import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { PokemonPage } from './pokemon-page';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/pokemon/:name' element={<PokemonPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes };
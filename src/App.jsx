import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes'

function App() {
  
  return (
    <div>
      <GlobalStyle/>
      <AppRoutes/>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: black;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }
`

export default App;
# Pokedex utilizando React

Este projeto é uma Single Page Aplication (SPA) que tem como objetivo exibir pokemons, 10 de cada vez, apresentar um filtro de pokemons por tipo e ao clicarem um pokemon em específico, mostrar informações adicionais dele na mesma página. O projeto contm um botão para alternância do tema da página entre escuro e claro, como também um botão de carregamento enquanto na interface principal para carregar mais 10 pokemons.

# Ferramentas
- React
    - Para criação das interfaces por SPA
- Vite
    - Para rápida construção da base do código
- Context API
    - Para manusear a troca de informações entre componentes de forma eficiente
- Styled-Components
    - Para estilizar componentes de forma rápida e organizada
- React-Router-Dom
    - Para criar links de navegação entres as interfaces
- PokéApi
    - Para buscar os pokémons e suas propriedades
- Jest
    - Para checar possíveis erros no desenvolvimento do código

# Decisões tomadas durante o desenvolvimento

Para criação do filtro de tipos, resolvi fazer um contexto contendo os tipos, suas respectivas cores e números de identificação, além das funções que são utilizadas em mais de um elemento para atribuir essas características nas propriedades dos elementos.

# Visualisando a página do projeto no seu computador
Site do projeto online: [projeto-pokedex-react.vercel.app](https://projeto-pokedex-react-cmup51drg-pedro-lucas-projects-fa69241a.vercel.app)

Para rodar o projeto no seu computador siga o passo a passo utilizando terminal: 

- Crie um clone na pasta que deseja:
  ```
  git clone https://github.com/Shyayhs/projeto-pokedex.git
  ```
- Selecione a pasta clonada:
  ```
  cd projeto-pokedex
  ```
- Inicialize npm e faça a instalação das dependências:
  ```
  npm install
  ```
- Inicialize o servidor de desenvolvimento:
  ```
  npm run dev
  ```
- No terminal vai ser exibido um endereço clicável que te redirecionará para a página

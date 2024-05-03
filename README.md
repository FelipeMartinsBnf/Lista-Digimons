#  Digimon React

Eu escolhi fazer o teste em React, pois é uma linguagem que eu estou tendo bastante contato atualmente, além de conseguir deixar o código bem organizado. Eu usei o react com o TypeScript, além de usar outras ferramentas como o ESlint ou o Prettier para deixar o código mais limpo, e assim facilitar o entendimento.
Eu segui o projeto do Figma mais ou menos a risca, tentei deixar o mais proximo possível.

**Ainda não consegui fazer a parte da pesquisa:**
Para toda a parte da pesquisa e dos filtros, eu ainda não sei muito bem como implementar, mesmo pesquisando ainda me parece ser bem complicado. Estou upando esta versão pois não sei se terei tempo para conseguir entender e depois implementar essa parte.

## Como Iniciar o Projeto

**Link do projeto na Vercel: ---**

Caso queira rodar o projeto localmente, é necessário ter instalado o seguinte:

- Node.js
- npm


1. Navegue até o diretório do projeto:

   ```bash
   cd projeto-digimon
   ```

2. Instale as dependências do projeto usando npm:

   ```bash
   npm install
   ```

3. Após a instalação, iniciar o servidor de desenvolvimento:

   ```bash
   npm start
   ```

## Sobre

O teste foi criado se baseando em três componentes principais:

- **Header**: exibe o cabeçalho da aplicação, incluindo o logo dos Digimons, uma barra de pesquisa e filtros*.
- **Listagem**: renderiza uma lista de Digimons recuperados da API. Cada Digimon na lista pode ser clicado para exibir mais detalhes em um modal.
- **DetalhesDigi**: exibe os detalhes de um Digimon em um modal, incluindo nome, imagem, nível e descrição.

Os estilos são aplicados utilizando a biblioteca Styled Components, e a comunicação com a API é feita utilizando o fetch API do JavaScript.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

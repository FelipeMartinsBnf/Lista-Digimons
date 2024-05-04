import Header from './containers/Header' // Importa o componente Header
import Listagem from './containers/Listagem' // Importa o componente Listagem
import EstiloGlobal from './styles' // Importa o estilo global
import { useState } from 'react'

/**
 * Componente principal da aplicação.
 * Renderiza o Header, a Listagem e aplica o estilo global.
 */
function App() {
  const [filtro, setFiltro] = useState('Todos') // Estado do filtro dos botões, vem como Todos como padrão
  const [pesquisa, setPesquisa] = useState('') // Estado da barra de pesquisa

  return (
    <>
      <EstiloGlobal />
      <Header
        filtroAtual={filtro} //Envio para o header qual é o filtro atualmente selecionado
        mudarFiltro={setFiltro} // Envio para o header a função para mudar o filtro
        setPesquisa={setPesquisa} // Envio para o header também a função para mudar o texto da barra de pesquisa
      />
      <Listagem
        filtroAtual={filtro} // Manda para a lista os parametros do filtro
        pesquisa={pesquisa} // Manda para a lista os parametros da pesquisa
      />
    </>
  )
}

export default App

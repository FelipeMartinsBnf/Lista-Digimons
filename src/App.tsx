import Header from './containers/Header' // Importa o componente Header
import Listagem from './containers/Listagem' // Importa o componente Listagem
import EstiloGlobal from './styles' // Importa o estilo global

/**
 * Componente principal da aplicação.
 * Renderiza o Header, a Listagem e aplica o estilo global.
 */
function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Listagem />
    </>
  )
}

export default App

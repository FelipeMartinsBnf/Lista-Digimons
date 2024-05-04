import BtnFiltro from '../../components/BtnFiltro'
import Digimonlogo from '../../Logo.png' // Importa o logo dos Digimons
import { Mcontainer } from '../../styles' // Importa um componente de estilo
import { BarraPesquisa, Logo, Divbtns, Divbtnswrapper } from './styles' // Importa componentes estilizados

type Props = {
  // O typescript obriga a tipar os elementos que esse componente recebe do app.tsx
  mudarFiltro: (filtro: string) => void
  filtroAtual: string
  setPesquisa: (pesquisa: string) => void
}

/**
 * Componente Header.
 * Exibe o cabeçalho da aplicação, incluindo o logo dos Digimons, uma barra de pesquisa e filtros.
 */
const Header = ({ mudarFiltro, filtroAtual, setPesquisa }: Props) => {
  return (
    <Mcontainer>
      <Logo src={Digimonlogo} alt="Digimon Logo" />
      <Divbtnswrapper>
        <BarraPesquisa
          type="text"
          placeholder="Buscar"
          onChange={(e) => {
            setPesquisa(e.target.value.toLowerCase())
            //quando houver mudança na barra, setar a pesquisa para o valor da barra em minúsculo
            //A função de mudar a pesquisa veio através das Props
          }}
        />
        <Divbtns>
          <BtnFiltro
            nomeFiltro="Todos"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
            // O btn filtro é mais um componente separado, e enviamos para ele qual o nome dele
            //Além de enviarmos as funções de mudar o filtro e qual é o filtro atual, que recebemos do app.tsx
          />
          <BtnFiltro
            nomeFiltro="Fresh"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
          <BtnFiltro
            nomeFiltro="In Training"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
          <BtnFiltro
            nomeFiltro="Rookie"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
          <BtnFiltro
            nomeFiltro="Champion"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
          <BtnFiltro
            nomeFiltro="Mega"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
          <BtnFiltro
            nomeFiltro="Ultimate"
            mudarFiltro={mudarFiltro}
            filtroAtual={filtroAtual}
          />
        </Divbtns>
      </Divbtnswrapper>
    </Mcontainer>
  )
}

export default Header
